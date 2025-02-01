import escpos from 'escpos';
import escposUSB from 'escpos-usb';

function print(text = '') {
    const device = new escposUSB();
    const printer = new escpos.Printer(device, { encoding: "UTF-8" });

    device.open((error) => {
    if (error) {
        console.error('Error opening device:', error);
        return;
    }

    text.split('\n').map(line =>  printer.println(line))

    printer
        .println('')
        .println('')
        .println('')
        .cut()
        .close();
    });
}

export default print
