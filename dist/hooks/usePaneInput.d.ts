import { FolderInstance } from './usePaneFolder';
import { RefObject } from 'react';
import { InputBindingApi, BindingParams, TpChangeEvent } from '@tweakpane/core';

type InputRef<T> = RefObject<InputBindingApi<unknown, T>>;
/**
 * Does not return the value and doesn't trigger an update because onChange is specified
 */
export declare function usePaneInput<T extends Object, K extends keyof T>(ref: RefObject<FolderInstance<T>>, key: K, inputParams: BindingParams | undefined, onChange: (event: TpChangeEvent<T[K]>) => void): [never, (value: T[K]) => void, InputRef<T[K]>];
/** Does not return the value and doesn't trigger an update because onChange is specified */
export declare function usePaneInput<T extends Object, K extends keyof T>(paneRef: RefObject<FolderInstance<T>>, key: K, onChange: (event: TpChangeEvent<T[K]>) => void): [never, (value: T[K]) => void, InputRef<T[K]>];
/**
 * Returns the value and triggers an update
 */
export declare function usePaneInput<T extends Object, K extends keyof T>(paneRef: RefObject<FolderInstance<T>>, key: K, inputParams?: BindingParams | undefined, onChange?: undefined): [T[K], (value: T[K]) => void, InputRef<T[K]>];
export declare function usePaneInput<T extends Object, K extends keyof T>(paneRef: RefObject<FolderInstance<T>>, key: K, inputParams?: BindingParams | undefined, onChange?: undefined): [T[K], (value: T[K]) => void, InputRef<T[K]>];
export {};
