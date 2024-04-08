import { atom } from 'jotai';

export const displayValues = atom<Array<number | null>>([null, null, null]);
export const spinCount = atom<number>(0);
export const totalsArray = atom<Array<number>>([]);
