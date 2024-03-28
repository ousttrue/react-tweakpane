import { PaneInstance } from './useTweakpane';
import { ListBladeApi } from 'tweakpane';
import { MutableRefObject } from 'react';
import { BaseBladeParams, ListParamsOptions, TpChangeEvent } from '@tweakpane/core';

interface UseSliderBladeParams<T> extends BaseBladeParams {
    options: ListParamsOptions<T>;
    value: T;
    label?: string;
    view?: 'list';
}
export declare function useListBlade<T extends Object, V>(paneRef: MutableRefObject<PaneInstance<T>>, bladeParams: UseSliderBladeParams<V>): [V, (value: V) => void, MutableRefObject<ListBladeApi<V>>];
export declare function useListBlade<T extends Object, V>(paneRef: MutableRefObject<PaneInstance<T>>, bladeParams: UseSliderBladeParams<V>, onChange: (event: TpChangeEvent<V>) => void): [never, (value: V) => void, MutableRefObject<ListBladeApi<V>>];
export {};
