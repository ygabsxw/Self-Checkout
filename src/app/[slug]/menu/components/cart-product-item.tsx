import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartProduct } from "../contexts/cart";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* ESQUERDA */}
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 rounded-xl bg-gray-100">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="font-semilbold text-sm">
            {formatCurrency(product.price)}
          </p>
          {/* QUANTIDADE */}
          <div className="flex items-center gap-1 text-center">
            <Button variant="outline" className="h-7 w-7 rounded-lg">
              <ChevronLeftIcon />
            </Button>
            <p className="w-7 text-xs">{product.quantity}</p>
            <Button variant="destructive" className="h-7 w-7 rounded-lg">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      {/* DELETAR */}
      <Button className="h-7 w-7 rounded-lg" variant="outline">
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartProductItem;
