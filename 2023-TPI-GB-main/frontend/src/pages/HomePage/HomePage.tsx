import CardElement from "../../components/CardElement/CardElement";
import { Heading } from "@chakra-ui/react";

function HomePage() {
  const vistas = [
    {
      title: "Productos",
      desc: "Ver los productos en stock.",
      img: "",
      url: "/productos",
    },
    {
      title: "Ventas",
      desc: "Ver todas las ventas realizadas.",
      img: "",
      url: "/ventas",
    },
    {
      title: "Compras",
      desc: "Ver todas las compras realizadas.",
      img: "",
      url: "/compras",
    },
  ];

  const tarjetas = vistas.map((v) => {
    return <CardElement {...v} />;
  });

  return (
    <>
      <div className="header" style={{ textAlign: "center" }}>
        <Heading style={{ fontSize: "3rem" }}>
          Bienvenido al Sistema de Gestión
        </Heading>
      </div>
      <div
        className="row"
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        {tarjetas}
      </div>
    </>
  );
}

export default HomePage;
