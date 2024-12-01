# sphero-r2d2-droid-controller

Attempt to control Sphero R2D2 droid from javascript

Original control software for Android already deprecated:

https://www.apkmirror.com/apk/sphero-inc/star-wars-app-enabled-droids-by-sphero/star-wars-app-enabled-droids-by-sphero-1-7-2-4-release/star-wars-droids-app-by-sphero-1-7-2-4-2-android-apk-download/

# NodeJS version

Attempted to use `sphero.js` in NodeJS version in `index.js` with:

* BLE `noble` on Arch Linux - failed; device has not changed the state to PoweredOn
* RFComm serial `serialport` - channel manually created with `rfcomm` but the device immediately disconnected

`npm run start` to execute the script

# Browser version

`npm run serve` to serve the `index.html`.

I can connect to the device, but it seems it disconnects immediately as writing to the GATT server fails.

