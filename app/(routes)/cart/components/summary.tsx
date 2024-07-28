"use client"

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Summary() {
    const router = useRouter();
    const items = useCart(state => state.items);
    const removeAll = useCart(state => state.removeAll);
    const totalPrice = items.reduce((total, item) => total + Number(item.products.price), 0)

    const onCheckout = async () => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map(item => item.products.id),
        });

        removeAll();
        router.push('/success');
    }

    return (
        <div className='px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
            <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
            <div className='mt-6 space-y-4'>
                <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
                    <div className='text-base font-medium text-gray-400'>
                        Order Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button disabled={items.length === 0} className='w-full mt-6' onClick={onCheckout}>
                Checkout
            </Button>
        </div>
     );
}