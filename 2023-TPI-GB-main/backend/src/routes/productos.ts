import express from "express";
import { ProductoController } from "../controllers/productos.js";
import { ProductoServiceImpl } from "../services/productos.js";
import { PrismaProductoRepository } from "../repositories/productos.js";

export function productosRouter() {
  const router = express.Router();

  const repository = new PrismaProductoRepository();
  const service = new ProductoServiceImpl(repository);
  const controller = new ProductoController(service);

  router.get("/", controller.getAll());
  router.post("/", controller.create());
  router.get("/:id", controller.getByID());
  router.delete("/:id", controller.deleteByID());
  router.put("/:id", controller.updateByID());

  return router;
}
