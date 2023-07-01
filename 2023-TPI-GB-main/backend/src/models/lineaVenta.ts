import Decimal from "decimal.js";
import { Producto } from "./producto";

export type LineaVenta = {
  linea: number;
  cantidad: number;
  precioUnitario: Decimal;
  producto: Producto;
};
