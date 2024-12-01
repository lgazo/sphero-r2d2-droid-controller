const sphero = require('sphero');

//const ble = require('noble');
const ble = require("@abandonware/noble");

const port = process.env.PORT || "/dev/rfcomm0";
const device_addr = "F6:81:2D:36:EC:8E";

console.log("port", {port, device_addr});
//ble.init();
/*ble.on('stateChange', function(state) {
	console.log('state', state);
});
*/
//ble.startScanning([device_addr], false);
//ble.startScanning();
//ble.connect({address:device_addr});

//while(true) {}

//console.log('end');
//return;
//const orb = sphero(device_addr);
const orb = sphero(port);



/**
 * Creates a new Sphero instance with the provided options.
 *
 * @param {String} address port/UUID/address of the connected Sphero
 * @param {Object} [opts] options for sphero setup
 * @param {Object} [opts.adaptor] if provided, a custom adaptor used for Sphero
 * communication
 * @param {Number} [opts.sop2=0xFD] SOP2 value to be passed to commands
 * @param {Number} [opts.timeout=500] delay before a command is considered dead
 * @example var orb = sphero("/dev/rfcomm0"); // linux
 * @example var orb = sphero("COM4"); // windows
 * @example
 * var orb = sphero("/dev/tty.Sphero-OGB-AMP-SPP", { timeout: 300 }); // OS X
 * @returns {Sphero} a new instance of Sphero
 */

console.log("connecting...", orb);
orb.connect().then(function() {
	console.log("then1");
  return orb.color("FF00FF");
}).then(function() {
	console.log("then2");
  return orb.getBluetoothInfo();
}).then(function(data) {
	console.log("then3");
  console.log("bluetoothInfo:");
  console.log("  name:", data.name);
  console.log("  btAddress:", data.btAddress);
  console.log("  separator:", data.separator);
  console.log("  colors:", data.colors);
}).catch(function(err) {
  console.error("err:", err);
});
