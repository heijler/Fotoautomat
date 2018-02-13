# Fotoautomat
A photo booth in the browser based on Web APIs, canvas and PHP

## Setup
To compile the Typescript to JavaScript (requires node/npm and the package 'typescript' (tested with typescript 2.7.1) to be installed):
```
tsc -p tsconfig.json
```


## Classes & packages
- photobooth
    - Main - Document class
    - Photobooth - Represents the photobooth
- utils
    - Warning - Represents a warn/user feedback
- webcam
    - Webcamera - Represents the camera connection
    - WebcameraSettings - Represents the settings for the MediaDevice

## Future classes?
- Machine
- Coin
- XHR
