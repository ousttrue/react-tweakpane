import { Pane } from 'tweakpane';
import { MutableRefObject } from 'react';

interface PaneConfig {
    /**
     * The custom container element of the pane.
     */
    container?: HTMLElement;
    /**
     * The default expansion of the pane.
     */
    expanded?: boolean;
    /**
     * The pane title that can expand/collapse the entire pane.
     */
    title?: string;
    /**
     * @hidden
     */
    document?: Document;
}
export interface PaneInstance<T extends Object> {
    instance: Pane | null;
    params: T;
}
export declare function useTweakpane<T extends Object>(params?: T, paneConfig?: PaneConfig): MutableRefObject<PaneInstance<T>>;
export {};
