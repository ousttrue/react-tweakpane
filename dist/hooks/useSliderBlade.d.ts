import { FolderInstance } from './usePaneFolder';
import { SliderBladeApi } from 'tweakpane';
import { MutableRefObject } from 'react';
import { BaseBladeParams, TpChangeEvent } from '@tweakpane/core';

interface UseSliderBladeParams extends BaseBladeParams {
    max: number;
    min: number;
    view?: 'slider';
    format?: (value: number) => string;
    label?: string;
    value?: number;
}
type BladeRef = MutableRefObject<SliderBladeApi>;
export declare function useSliderBlade<T extends Object, V>(paneRef: MutableRefObject<FolderInstance<T>>, bladeParams: UseSliderBladeParams): [number, (value: number) => void, BladeRef];
export declare function useSliderBlade<T extends Object, V>(paneRef: MutableRefObject<FolderInstance<T>>, bladeParams: UseSliderBladeParams, onChange: (event: TpChangeEvent<number>) => void): [never, (value: number) => void, BladeRef];
export {};
