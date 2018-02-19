namespace webcam {

    export interface IWebcamSetting {
        audio: boolean;
        video: ISize;
    }

    export interface ISize {
        height: IDimension;
        width: IDimension;
    }

    export interface IDimension {
        ideal: Number;
    }

    // var obj: IWebcamSetting = {
    //     audio: false,
    //     video: {
    //         height: {
    //             ideal: 720
    //         },
    //         width: {
    //             ideal: 1080
    //         }
    //     }
    // }
}