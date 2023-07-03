import Decimal from "decimal.js";
import { Producto } from "./producto";

export type LineaCompra = {
  linea: number;
  cantidad: number;
  precioUnitario: Decimal;
  producto: Producto;
};
