import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

function CartOptions({ product, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">${product.price}</p>
          <div className="flex space-x-4">
            <Button className="bg-green-500 text-white">Add to Cart</Button>
            <Button className="bg-blue-500 text-white">Buy Now</Button>
          </div>
          <Button className="mt-4" onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }


export default function Ecommerce() {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10">Error loading products</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">One stop solution for all your needs!</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-4 shadow-md rounded-lg">
            <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
            <CardContent>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 text-sm">{product.category}</p>
              <p className="font-bold text-xl mt-2">${product.price}</p>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-500" />
                <span className="ml-1 text-sm">{product.rating?.rate} ({product.rating?.count} reviews)</span>
              </div>
              <Button className="mt-4 w-full" onClick={() => setSelectedProduct(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedProduct && <CartOptions product={selectedProduct} onClose={() => setSelectedProduct(null)} />}

    </div>
  );
}
