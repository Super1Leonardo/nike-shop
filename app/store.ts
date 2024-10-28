// store.ts
import { atomWithStorage } from 'jotai/utils';

export interface BasketItem {
    name: string;
    price: string;
    image: string;
    description: string;
}

export const basket = atomWithStorage<BasketItem[]>('basket', []);