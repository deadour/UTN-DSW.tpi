import { LineaCompra } from "./lineaCompra";

export type Compra = {
  id: number;
  fecha: number;
  proveedor: string | null;
  lineas: LineaCompra[];
};
