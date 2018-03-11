namespace webcam {

    /**
     * 
     */
    export interface IWebcamSetting {
        audio: boolean;
        video: ISize;
    }

    /**
     * 
     */
    export interface ISize {
        height: IDimension;
        width: IDimension;
    }

    /**
     * 
     */
    export interface IDimension {
        ideal: number;
    }
}