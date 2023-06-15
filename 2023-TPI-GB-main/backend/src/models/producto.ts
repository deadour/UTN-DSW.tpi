import Decimal from "decimal.js/";

export type Producto = {
  id: number;
  nombre: string;
  stock: number;
  precio: Decimal;
  categoria: string | null;
  fechaActualizacion: Date | null;
};
