import Decimal from "decimal.js";
import { Compra } from "./compra";
import { Producto } from "./producto";

export type LineaCompra = {
  linea: number;
  cantidad: number;
  precioUnitario: Decimal;
  compra: Compra;
  producto: Producto;
};
