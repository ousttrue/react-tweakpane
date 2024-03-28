import { FolderApi, FolderParams } from 'tweakpane';
import { PaneInstance } from './useTweakpane';
import { RefObject } from 'react';

export interface FolderInstance<T extends {}> {
    instance: FolderApi | null;
    params: T;
}
export declare function usePaneFolder<T extends {}>(paneRef: RefObject<PaneInstance<T>>, folderParams: FolderParams): RefObject<FolderInstance<T>>;
