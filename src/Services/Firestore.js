// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, doc, getDocs, getDoc, query, where, addDoc, orderBy, limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8OCyqLTKRh28wU2JcuAJrB_-94G9J8no",
  authDomain: "gamer-props-react.firebaseapp.com",
  projectId: "gamer-props-react",
  storageBucket: "gamer-props-react.appspot.com",
  messagingSenderId: "545727509057",
  appId: "1:545727509057:web:68fe4e3f2f5fcdb6ad4cc0"
};

const app = initializeApp(firebaseConfig);

// 0. Inicializamos Firestore
const DB = getFirestore(app);

//1. Traer todos los documentos
export default async function getItems() {
  //1.A Referenciamos nuestra colección
  const colectionProductsRef = collection(DB, "products");
  //1.B Solicitamos todos los documentos de la colección
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

//1. Traer todos los documentos
export async function getItemsOrdered() {
  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index"), limit(12));
//en limit colocamos cantidad limitada de productos a mostrar en index, en este caso 12 prod.//
  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

//2. Traer un documento por ID
export async function getOneItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

//3. Traer todos los  documentos según categoria
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

//4. Enviar la orden a Firebase
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");

  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}

/*export--->para exportar catalogo con CartView*/ async function exportArrayToFirestore() {
  const products = [
    {
      id: 1,
      title: "Mother B550M",
      description: "Gamer Props",
      price: 889,
      discount: "10%",
      freeDelivery: true,
      stock: 15,
      category: "motherboard",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_916853-MLA43429539399_092020-F.webp",

    },
    {
      id: 2,
      title: "Mother A520M",
      description: "Gamer Props",
      price: 899,
      discount: "10%",
      freeDelivery: true,
      stock: 15,
      category: "motherboard",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_841088-MLA51919059336_102022-F.webp",
    },
    {
      id: 3,
      title: "Mother A320M",
      description: "Gamer Props",
      price: 750,
      discount: "10%",
      freeDelivery: true,
      stock: 15,
      category: "motherboard",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_987094-MLA50998055783_082022-F.webp",
    },
    {
      id: 4,
      title: "Proc. AMD Ryzen 7",
      description: "5700G",
      price: 499,
      stock: 20,
      category: "processor",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_940934-MLU47593217192_092021-F.webp",
    },
    {
      id: 5,
      title: "Proc. INTEL Core i9",
      description: "10th",
      price: 750,
      stock: 10,
      category: "processor",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_939767-MLA43004112705_082020-F.webp",
    },
    {
      id: 6,
      title: "Proc. AMD Ryzen 5",
      description: "5400X",
      price: 350,
      stock: 50,
      category: "processor",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_717692-MLA40182401049_122019-F.webp",
    },
    {
      id: 7,
      title: "Memory Kingston DDR4",
      description: "Fury Beast",
      price: 159,
      stock: 40,
      category: "memory",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_612752-MLA48636149729_122021-F.webp",
    },
    {
      id: 8,
      title: "Memory Corsair DDR4",
      description: "Vengeance",
      price: 189,
      stock: 40,
      category: "memory",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_797873-MLA47873778769_102021-F.webp",
    },
    {
      id: 9,
      title: "Memory Kingston DDR4",
      description: "Fury Beast",
      price: 201,
      stock: 30,
      category: "memory",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_935642-MLA49130955690_022022-F.webp",
    },
    {
      id: 10,
      title: "HDD Seagate",
      description: "2TB",
      price: 60,
      stock: 25,
      category: "storage",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_664630-MLA46481261294_062021-F.webp",
    },
    {
      id: 11,
      title: "SSD Western Digital",
      description: "500gb",
      price: 40,
      stock: 52,
      category: "storage",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_758655-MLA40254271668_122019-F.webp",
    },
    {
      id: 12,
      title: "SSD NVMe M2",
      description: "Western Digital 480gb",
      price: 60,
      stock: 30,
      category: "storage",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_859123-MLA47572156977_092021-F.webp",
    },
    {
      id: 13,
      title: "SSD Kingston",
      description: "250gb",
      price: 50,
      stock: 20,
      category: "storage",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_751939-MLA46221843872_052021-F.webp",
    },
    {
      id: 14,
      title: "SSD NVMe M2",
      description: "Western Digital 240gb",
      price: 30,
      stock: 105,
      category: "storage",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_984906-MLA47856243587_102021-F.webp",
    },
    {
      id: 15,
      title: "SSD NVMe M2",
      description: "Western Digital 240gb",
      price: 19,
      stock: 110,
      category: "storage",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_822157-MLA46222652693_052021-F.webp",
    },
    {
      id: 16,
      title: "GPU Gigabyte RTX 3090",
      description: "24gb",
      price: 535,
      stock: 10,
      category: "gpu",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_665641-MLA44039957407_112020-F.webp",
    },
    {
      id: 17,
      title: "GPU EVGA RTX 2060",
      description: "12gb",
      price: 219,
      stock: 20,
      category: "gpu",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_989904-MLA43401240797_092020-F.webp",
    },
    {
      id: 18,
      title: "GPU FOX Radeon 560",
      description: "12gb",
      price: 189,
      stock: 10,
      category: "gpu",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_678868-MLA47073899757_082021-F.webp",
    },
    {
      id: 19,
      title: "GPU MSI RTX 2060 Super",
      description: "8gb",
      price: 149,
      stock: 10,
      category: "gpu",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_851950-MLA42349749318_062020-F.webp",
    },
    {
      id: 20,
      title: "GPU GIGABYTE Radeon",
      description: "RX 6800 24gb",
      price: 459,
      stock: 10,
      category: "gpu",
      imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_914252-MLA51840136373_102022-F.webp",
    },
  ];

  const collectionRef = collection(DB, "products");

  // for... of
  // products.map( (item) => {})
  for (let item of products) {
    item.index = item.id;
    delete item.id;
    let docOrder = await addDoc(collectionRef, item);
    console.log("Documento creado, id:", docOrder.id);
  }
}