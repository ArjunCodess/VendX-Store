"use client"

import Image from 'next/image';
import { TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import GalleryTab from './gallery-tab';
import { Image as ImageType } from '@/types';

interface GalleryProps {
    images: ImageType;
}

export const revalidate = 0;

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return ( 
        <TabGroup as="div" className="flex flex-col-reverse">
            {/* <div className='hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none'>
                <Tab.List className="grid grid-cols-4 gap-6">
                    <GalleryTab key={Math.floor(Math.random() * 1000)} image={images} />
                </Tab.List>
            </div> */}
            <TabPanels className="w-full aspect-square">
                <TabPanel key={images.id}>
                        <div className='relative w-full h-full overflow-hidden aspect-square sm:rounded-lg'>
                            {/* @ts-ignore */}
                            <Image fill src={images} alt={'Image'} className='object-cover object-center' />
                        </div>
                    </TabPanel>
            </TabPanels>
        </TabGroup>
     );
}
 
export default Gallery;