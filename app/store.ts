// store.ts
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface BasketItem {
    name: string;
    price: string;
    image: string;
    description: string;
}

export const basket = atomWithStorage<BasketItem[]>('basket', []);