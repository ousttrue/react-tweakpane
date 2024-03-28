import { FolderInstance } from './usePaneFolder';
import { BaseBladeParams, TextBladeApi, TpChangeEvent } from 'tweakpane';
import { MutableRefObject } from 'react';

interface UseTextBladeParams<T> extends BaseBladeParams {
    parse: (text: string) => T | null;
    value: T;
    format: (value: T) => string;
    label?: string;
}
type BladeRef<V> = MutableRefObject<TextBladeApi<V>>;
export declare function useTextBlade<T extends Object, V>(paneRef: MutableRefObject<FolderInstance<T>>, bladeParams: UseTextBladeParams<V>): [V, (value: V) => void, BladeRef<T>];
export declare function useTextBlade<T extends Object, V>(paneRef: MutableRefObject<FolderInstance<T>>, bladeParams: UseTextBladeParams<V>, onChange: (event: TpChangeEvent<V>) => void): [never, (value: V) => void, BladeRef<T>];
export {};
