## Kissbox Input Output 
This module is for controlling a Kissbox over UDP. To enable UDP and set the correct ports first make sure the kissbox is correctley configured with the kisboxeditor

### Configuration
* Type in the IP address of the kissbox.
* Type in the port of the kissbox (default is 9813).
* Type in the IP of the device that you run companion off
* Type in the port of the device.
* Select the kissbox slotsize io3 or io8.
* if you would like to have outputs of the kissbox as a variable select
        show outputs on variables
* Select the type of cards plugged into the slots 

### Available Actions
* Setting an individual output to on or off
* changing values on inputcards show up in the companion variables 
* analog output values will be a percentage of 10 volts
* analog input values will be a pesentage of 5 volts
