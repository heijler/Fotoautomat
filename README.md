# Fotoautomat
A photo booth in the browser based on Web APIs, canvas and PHP.

Ideal resolution: 3840x2160 (4k)
Will most likely result in webcams max resolution.

## Setup
To compile the Typescript to JavaScript (requires node/npm and the package 'typescript' (tested with typescript 2.8.0-dev.20180308) to be installed):
```
tsc -p tsconfig.json
```


## Classes & packages
- photobooth
    - Main - Document class
    - Photobooth - Represents the photobooth
- ui
    - Reflection - Represents the "reflection"
    - UI - Represents UI elements/references
- utils
    - Warning - Represents a warn/user feedback
- webcam
    - Webcamera - Represents the camera connection
    - WebcameraSettings - Represents the settings for the MediaDevice


## Future classes?
- ui
    - Reflection - Represents the reflection UI.
    - Export - Represents the export UI.
    - Coinslot - Represents the coinslot UI.
    - PhotoStrips - Represents the photostrips UI.
    - StartButton - Represents the start button UI.
    - EyeLevel - Represents the eye level UI.
    - Sign - Represents a sign UI.
    - PhotoboothUI - Start class for UI components.

