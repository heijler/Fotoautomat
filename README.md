# Fotoautomat
A photo booth in the browser based on Web APIs, canvas and using jsPDF.

Ideal resolution: 1920x1080 (HD)
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
- alert
    - Warning - Represents a warning
    - UserWarning - Represents a user facing warning
    - SystemWarning - Represents a system facing warning
- ui
    - UI - Represents UI elements/references
    - PhotoboothUI - Represents the photobooth UI
    - Reflection - Represents the "reflection"
    - Coin - Represents a Coin
    - Coinslot - Represents a coinslot
    - Export - Represents an exportslot
    - Shelf - Represents a shelf
    - ShelfItem - Represents an item on a shelf
    - Sign - Represents a sign
    - Startbutton - Represents a startbutton
- webcam
    - Webcamera - Represents the camera connection
    - WebcameraSettings - Represents the settings for the MediaDevice
    - IWebcamSetting - Interface for webcamerasettings


## About
This project was constructed for the course Webbteknik 6 (Web technology 6 - 1ME326), taught by Henrik Andersen and administered by the department of [Media Technology] (https://lnu.se/mot-linneuniversitetet/Organisation/fakulteten-for-teknik/mot-fakulteten/medieteknik/) at [Linnaeus University](https://lnu.se) in Växjö, Sweden.
