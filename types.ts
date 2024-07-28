export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
    billboardId: string;
}

export interface Product {
    products: {
        id: string;
        name: string;
        price: string;
        isFeatured: boolean;
        isArchived: boolean;
        createdAt: string;
        storeId: string;
        categoryId: string;
        colorId: string;
        sizeId: string;
    }
    category: Category;
    color: Color;
    images: Image;
    size: Size;
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}
export interface Color {
    id: string;
    name: string;
    value: string;
}