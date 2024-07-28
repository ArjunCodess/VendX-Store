"use client"

import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from 'react';
import useCart from "@/hooks/use-cart";

const ProductCard = ({ data }: { data: any }) => {
    const cart = useCart();

    const router = useRouter();

    const handleClick = () => router.push(`/product/${data.products.id}`)

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }

    return (
        <div onClick={handleClick} className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
            {/* Images and Actions */}
            <div className="relative bg-gray-100 aspect-square rounded-xl">
                <Image
                    fill
                    src={data.images.url}
                    alt="Images"
                    className="object-cover rounded-md aspect-square"
                />
                <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
                    <div className="flex justify-center gap-x-6">
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>

            {/* Description */}
            <div>
                <p className="text-lg font-semibold">
                    {data.products.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category.name}
                </p>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data.products.price} />
            </div>
        </div>
    );
}

export default ProductCard;