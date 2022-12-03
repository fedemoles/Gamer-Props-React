# `Web Page Gamer-Props-React`

## `Objetivo`
La web page ha sido diseñada utilizando React JS, teniendo como objetivo servir como e-commerce para la adquisición de cualquier tipo de línea de productos, en este caso puntual el e-commerce se focaliza en la línea de hardware, óptima para el usuario gaming.

### `Funcionalidad y perspectivas futuras`
El sitio está hecho con HTML, CSS, JS y React JS, habiendo utilizado además el framework Bootstrap. 
Con posterioridad, se podría incorporar otros frameworks, tales como Vue JS.

### `Descripción de las páginas y secciones del proyecto`
-En la página principal se muestran las cards con un total de 12 productos (12 cards), la cantidad total de productos ofrecidos es de 20, esto se pude modificar desde el archivo  Firestore.js en el <font color="orange">export async function getItemsOrdered</font>.<br><p>
-En la sección de cada producto, Ver Producto, se accede a la visulización de un solo producto para posteriormente acceder a la compra del mismo, ya sea una sola unidad o en cantidad, limitado al stock disponible de cada producto.<br><p>
-Una vez agragado el producto al carrito se habilita la lsección para que vayamos al carrito de compras, en dicha sección se se incorpora un formulario para que el usuario y/o potencial cliente/comprador ingrese sus datos, asi coo nombre y apellido, dirección de mail donde direccionar el pido,y telefono de contacto, una vez completos dichos campos se habilitará la opcón para finlaiza la compra, el sistema desplegará un agradecimiento por la compra realizada y el núnmero de compra generado.<br><p>
-Un avez realizada l acompra podremos visualizar en la data de firestore ingresando en orders, el pedido realizado por el usuario y/o potencial cliente/comprador.<br><p>
-Los encabezados de cada página fueron realizados con Bootstrap, ya que permite cumplir con el responsive para los distintos dispositivos desde los cuáles se visita la web page.<br><p>
-Los pies de página incorporan links a las redes sociales del e-commerce para publicar y mantenerse al tanto de ofertas, promociones y descuentos.<br><p>
-Se agrega código de error 404, el mismo se enceuntra en la sección <font color="orange">App.jsx</font>.<br><p>

### `Fuentes del proyecto`
Para el desarrollo del proyecto se utilizaron imágenes disponibles en la web, logos y fotos personales.

### `Acceso a la web page del proyecto`

Click on the link below to access.
https://gamer-props-react.netlify.app// (Netlify)

### `Screenshot del proyecto`
<img src="https://github.com/fedemoles/Gamer-Props-React/tree/main/public/img/demohome.png">



<!--
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
-->