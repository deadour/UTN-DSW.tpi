import Decimal from "decimal.js";
import { Venta } from "./venta";
import { Producto } from "./producto";

export type LineaVenta = {
  linea: number;
  cantidad: number;
  precioUnitario: Decimal;
  venta: Venta;
  producto: Producto;
};
