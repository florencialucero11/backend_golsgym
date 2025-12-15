// controllers/products.controller.js
import * as productService from "../services/products.service.js";

export async function getAllProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    return res.json({ ok: true, products });
  } catch (error) {
    console.error("CONTROLLER getAllProducts:", error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}

export async function getProductById(req, res) {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ ok: false, message: "Producto no encontrado" });
    return res.json({ ok: true, product });
  } catch (error) {
    console.error("CONTROLLER getProductById:", error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}

export async function createProduct(req, res) {
  try {
    const newProduct = await productService.createProduct(req.body);
    return res.status(201).json({ ok: true, product: newProduct });
  } catch (error) {
    console.error("CONTROLLER createProduct:", error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    await productService.deleteProductById(req.params.id);
    return res.json({ ok: true, message: "Producto eliminado" });
  } catch (error) {
    console.error("CONTROLLER deleteProduct:", error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}
