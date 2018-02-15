# Fotoautomat
A photo booth in the browser based on Web APIs, canvas and PHP.

Ideal resolution: 3840x2160 (4k)
Will most likely result in webcams max resolution.

## Setup
To compile the Typescript to JavaScript (requires node/npm and the package 'typescript' (tested with typescript 2.7.1) to be installed):
```
tsc -p tsconfig.json
```


## Classes & packages
- photobooth
    - Main - Document class
    - Photobooth - Represents the photobooth
-ui
    - Reflection - Represents the "reflection"
    - UI - Represents UI elements/references
- utils
    - Warning - Represents a warn/user feedback
- webcam
    - Webcamera - Represents the camera connection
    - WebcameraSettings - Represents the settings for the MediaDevice

## Future classes?
- Machine
- Coin
- XHR
