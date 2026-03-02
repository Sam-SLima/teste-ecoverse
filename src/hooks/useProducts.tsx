import { useState, useEffect } from "react";
import type { ApiResponse, Product } from "../types/producs";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setLoading(false);
      });
  }, []);

  return { products, loading };
};
