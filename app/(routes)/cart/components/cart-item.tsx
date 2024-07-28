"use client"

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';
import { X } from 'lucide-react';
import Image from 'next/image';

const CartItem = ({ data }: { data: Product }) => {
    const cart = useCart();
    const onRemove = () => cart.removeItem(data.products.id);
    
    return (
        <li className='flex py-6 border-b'>
            <div className='relative w-24 h-24 overflow-hidden rounded-md sm:h-48 sm:w-48'>
                <Image
                    fill
                    src={data.images.url}
                    alt=""
                    className='object-cover object-center'
                />
            </div>
            <div className='relative flex flex-col justify-between flex-1 ml-4 sm:ml-6'>
                <div className='absolute top-0 right-0 z-10'>
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                    <div className='flex justify-between'>
                        <p className='text-lg font-semibold text-black'>
                            {data.products.name}
                            <br />
                            <span className='text-base text-neutral-700'>({data.color.name}, {data.size.name})</span>
                        </p>
                    </div>
                    <Currency value={data.products.price} />
                </div>
            </div>
        </li>
    )
}

export default CartItem;