import { useState } from "react";

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <form onSubmit={onSubmit}>
      {/* Podriamos convertir los inputs en Componentes */}
      <div style={{ display: "flex", alignItems:"center", marginBottom: 10, }}>
        <label htmlFor="name" style={{ width: "550px", marginRight: 4 }}>
          Nombre y Apellido
        </label>
        <input
          required
          value={data.name}
          name="name"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", alignItems:"center", marginBottom: 10 }}>
        <label htmlFor="email" style={{ width: "550px", marginRight: 4 }}>
          Email
        </label>
        <input
          required
          value={data.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", alignItems:"center", marginBottom: 10 }}>
        <label htmlFor="phone" style={{ width: "550px", marginRight: 4 }}>
          Teléfono
        </label>
        <input
          required
          value={data.phone}
          name="phone"
          type="phone"
          onChange={onInputChange}
        />
      </div>

      <button
        disabled={data.name === "" || data.phone === "" || data.email === ""}
        type="submit"style={{ backgroundColor: "green", color:"white", marginRight: 4, borderRadius:"4px",padding:"4px"}}
      >
        Finalizar Compra
      </button>
    </form>
  );
}
