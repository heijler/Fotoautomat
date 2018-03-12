namespace webcam {

    /**
     * {audio:true, video:ISize}
     */
    export interface IWebcamSetting {
        audio: boolean;
        video: ISize;
    }

    /**
     *  {height:IDmension, width: IDimension}
     */
    export interface ISize {
        height: IDimension;
        width: IDimension;
    }

    /**
     * {ideal:number}
     */
    export interface IDimension {
        ideal: number;
    }
}