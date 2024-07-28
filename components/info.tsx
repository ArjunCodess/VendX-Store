'use server';

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import getColors from "@/actions/get-colors";
import getSizes from "@/actions/get-sizes";

const Info = async ({ data }: { data: any }) => {
    const colors = await getColors();
    const color = colors.find((color) => color.id === data.colorId);

    const sizes = await getSizes();
    const size = sizes.find((size) => size.id === data.sizeId);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="flex items-end justify-between mt-3">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.products?.price || data.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>{data?.size?.value || size?.value}{" "}({data?.size?.name || size?.name})</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="w-6 h-6 border border-gray-600 rounded-full" style={{ backgroundColor: data?.color?.value || color?.value }} />
                </div>
            </div>
            <div className="flex items-center mt-10 gap-x-4">
                <Button className="flex items-center gap-x-2">
                    Add To Cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    );
}

export default Info;