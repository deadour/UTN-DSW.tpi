import express from "express";
import { productosRouter } from "./routes/productos.js";

const app = express();

app.use(express.json());
app.use("/productos", productosRouter());

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor desplegado :)");
});
