import * as VARS from './models.js'


// Selection between an IO3 and IO8
export function getActionDefinitions(self) {
    if (self.config.model == 1){
    //if (true) {
        return {
            ...getSlotValues3(self),
            ...getSlot1Actions(self),
            ...getSlot2Actions(self),
            ...getSlot3Actions(self)
        }
    }    
    else {
        return{
            ...getSlotValues8(self),
            ...getSlot1Actions(self),
            ...getSlot2Actions(self),
            ...getSlot3Actions(self),
            ...getSlot4Actions(self),
            ...getSlot5Actions(self),
            ...getSlot6Actions(self),
            ...getSlot7Actions(self),
            ...getSlot8Actions(self)
        }
    }
}


let card
let cardObject
// ANALOG
let analogOptions = [
    {
        type: 'dropdown',
        label: 'Contact',
        id: 'contact',
        choices: VARS.CONTACT,
    },
    {
        id: 'value',
        type: 'number',
        label: 'Analog value in percent',
        default: 0,
        min: 0,
        max: 100
    }]

let digitalOptions = [
    {
        type: 'dropdown',
        label: 'Contact',
        id: 'contact',
        choices: VARS.CONTACT,
    },
    {
        type: 'dropdown',
        label: 'On / Off',
        id: 'value',
        choices: VARS.IOSETTING,
    }]

let relayOptions =  [
    {
        type: 'dropdown',
        label: 'Contact',
        id: 'contact',
        choices: VARS.RELAYCONTACT,
    },
    {
        type: 'dropdown',
        label: 'On / Off',
        id: 'value',
        choices: VARS.IOSETTING,
    }]

function getSlot1Actions(self) {

    let card1 = self.config.slot1
    cardObject = {
        slot1: {
            name: 'inserted card',
            options: 'options',
            callback: (action) => {
                const hexString = 'A500' + action.options.contact + ValToHex(action.options.value, card1);
                const buffer = Buffer.from(hexString, 'hex');
                self.udp.send(buffer)
                hexString = 'A200' + action.options.contact// + ValToHex(action.options.value, card1);
                buffer = Buffer.from(hexString, 'hex');
                self.udp.send(buffer)
            }    
        }
    }
    switch (card1) {
        case '6':
            cardObject.slot1.name = 'SLOT-1 Relay output'
            cardObject.slot1.options = relayOptions
            break;
        case '8':
            cardObject.slot1.name = 'SLOT-1 Digital output'
            cardObject.slot1.options = digitalOptions
            break;
        case '10':
            cardObject.slot1.name = 'SLOT-1 Analog output'
            cardObject.slot1.options = analogOptions
            break;
        default:
            return
            break; 
    }
    return cardObject
}       

function getSlot2Actions(self) {

    let card2 = self.config.slot2
    cardObject = {
        slot2: {
            name: 'inserted card',
            options: 'options',
            callback: (action) => {
                //send command and inmediatly read the contact for output variable setting
                const hexString = 'A501' + action.options.contact + ValToHex(action.options.value, card2)// + '0DA201' + action.options.contact;
                //console.log('hexstring', hexString)
                const buffer = Buffer.from(hexString, 'hex');
                //console.log('buffer', buffer)
                self.udp.send(buffer)
                //send command and inmediatly read the contact for output variable setting
                const baffer = Buffer.from('A001', 'hex');
                self.udp.send(baffer)
            }    
        }
    }
    switch (card2) {
        case '6':
            cardObject.slot2.name = 'SLOT-2 Relay output'
            cardObject.slot2.options = relayOptions
            break;
        case '8':
            cardObject.slot2.name = 'SLOT-2 Digital output'
            cardObject.slot2.options = digitalOptions
            break;
        case '10':
            cardObject.slot2.name = 'SLOT-2 Analog output'
            cardObject.slot2.options = analogOptions
            break;
        default:
            return
            break; 
    }
    return cardObject
}       

function getSlot3Actions(self) {

    let card3 = self.config.slot3
    cardObject = {
        slot3: {
            name: 'inserted card',
            options: 'options',
            callback: (action) => {
                const hexString = 'A502' + action.options.contact + ValToHex(action.options.value, card3);
                const buffer = Buffer.from(hexString, 'hex');
                self.udp.send(buffer)
                const baffer = Buffer.from('A002', 'hex');
                self.udp.send(baffer)
            }    
        }
    }
    switch (card3) {
        case '6':
            cardObject.slot3.name = 'SLOT-3 Relay output'
            cardObject.slot3.options = relayOptions
            break;
        case '8':
            cardObject.slot3.name = 'SLOT-3 Digital output'
            cardObject.slot3.options = digitalOptions
            break;
        case '10':
            cardObject.slot3.name = 'SLOT-3 Analog output'
            cardObject.slot3.options = analogOptions
            break;
        default:
            return
            break; 
    }
    return cardObject
}       

function getSlot4Actions(self) {

    let card4 = self.config.slot4
    cardObject = {
        slot4: {
            name: 'inserted card',
            options: 'options',
            callback: (action) => {
                const hexString = 'A503' + action.options.contact + ValToHex(action.options.value, card3);
                const buffer = Buffer.from(hexString, 'hex');
                self.udp.send(buffer)
                const baffer = Buffer.from('A003', 'hex');
                self.udp.send(baffer)
            }    
        }
    }
    switch (card4) {
        case '6':
            cardObject.slot4.name = 'SLOT-4 Relay output'
            cardObject.slot4.options = relayOptions
            break;
        case '8':
            cardObject.slot4.name = 'SLOT-4 Digital output'
            cardObject.slot4.options = digitalOptions
            break;
        case '10':
            cardObject.slot4.name = 'SLOT-4 Analog output'
            cardObject.slot4.options = analogOptions
            break;
        default:
            return
            break; 
    }
    return cardObject
}       

function getSlot5Actions(self) {

   let card5 = self.config.slot5
    cardObject = {
        slot5: {
            name: 'inserted card',
            options: 'options',
            callback: (action) => {
                const hexString = 'A504' + action.options.contact + ValToHex(action.options.value, card5);
                const buffer = Buffer.from(hexString, 'hex');
                self.udp.send(buffer)
                const baffer = Buffer.from('A004', 'hex');
                self.udp.send(baffer)
            }    
        }
    }
    switch (card5) {
        case '6':
            cardObject.slot5.name = 'SLOT-5 Relay output'
            cardObject.slot5.options = relayOptions
            break;
        case '8':
            cardObject.slot5.name = 'SLOT-5 Digital output'
            cardObject.slot5.options = digitalOptions
            break;
        case '10':
            cardObject.slot5.name = 'SLOT-5 Analog output'
            cardObject.slot5.options = analogOptions
            break;
        default:
        return
        break; 
    }
    return cardObject
}       

function getSlot6Actions(self) {

    let card6 = self.config.slot6
    cardObject = {
        slot6: {
            name: 'inserted card',
            options: 'options',
            callback: (action) => {
                const hexString = 'A505' + action.options.contact + ValToHex(action.options.value, card6);
                const buffer = Buffer.from(hexString, 'hex');
                self.udp.send(buffer)
                const baffer = Buffer.from('A005', 'hex');
                self.udp.send(baffer)
            }    
        }
    }
    switch (card6) {
        case '6':
            cardObject.slot6.name = 'SLOT-6 Relay output'
            cardObject.slot6.options = relayOptions
            break;
        case '8':
            cardObject.slot6.name = 'SLOT-6 Digital output'
            cardObject.slot6.options = digitalOptions
            break;
        case '10':
            cardObject.slot6.name = 'SLOT-6 Analog output'
            cardObject.slot6.options = analogOptions
            break;
        default:
            return	
            break; 
    }
    return cardObject
}       

function getSlot7Actions(self) {

    let card7 = self.config.slot7
    cardObject = {
        slot7: {
            name: 'inserted card',
            options: 'options',
            callback: (action) => {
                const hexString = 'A506' + action.options.contact + ValToHex(action.options.value, card7);
                const buffer = Buffer.from(hexString, 'hex');
                self.udp.send(buffer)
                const baffer = Buffer.from('A006', 'hex');
                self.udp.send(baffer)
            }    
        }
    }
    switch (card7) {
        case '6':
            cardObject.slot7.name = 'SLOT-7 Relay output'
            cardObject.slot7.options = relayOptions
            break;
        case '8':
            cardObject.slot7.name = 'SLOT-7 Digital output'
            cardObject.slot7.options = digitalOptions
            break;
        case '10':
            cardObject.slot7.name = 'SLOT-7 Analog output'
            cardObject.slot7.options = analogOptions
            break;
        default:
            return	
            break; 
    }
    return cardObject
}       

function getSlot8Actions(self) {

    let card8 = self.config.slot8
    cardObject = {
        slot8: {
            name: 'inserted card',
            options: 'options',
            callback: (action) => {
                const hexString = 'A507' + action.options.contact + ValToHex(action.options.value, card8);
                const buffer = Buffer.from(hexString, 'hex');
                self.udp.send(buffer)
                const baffer = Buffer.from('A007', 'hex');
                self.udp.send(baffer)
            }    
        }
    }
    switch (card8) {
        case '6':
            cardObject.slot8.name = 'SLOT-8 Relay output'
            cardObject.slot8.options = relayOptions
            break;
        case '8':
            cardObject.slot8.name = 'SLOT-8 Digital output'
            cardObject.slot8.options = digitalOptions
            break;
        case '10':
            cardObject.slot8.name = 'SLOT-8 Analog output'
            cardObject.slot8.options = analogOptions
            break;
        default:
            return
            break; 
    }
    return cardObject
}      

function getSlotValues8(self) {

    cardObject = {
        slotvalues8: {
            name: 'Get all values on the cards',
            options:
                [{
                    type: 'static-text',
                    id: 'info',
                    label: 'Information',
                    value: 'Read all the contacts of the Kissbox',
                }],
            callback: () => {
                for (let i = 0; i < 8; i++) {
                    const buffer = Buffer.from('A00'+i, 'hex');
                    //console.log(buffer)
                    self.udp.send(buffer)
                }
            }    
        }
    }
    return cardObject
}

function getSlotValues3(self) {

    cardObject = {
        slotvalues3: {
            name: 'Get all values on the cards',
            options:
                [{
                    type: 'static-text',
                    id: 'info',
                    label: 'Information',
                    value: 'Read all the contacts of the Kissbox',
                }],
            callback: () => {
                for (let i = 0; i < 3; i++) {
                    const buffer = Buffer.from('A00'+i, 'hex');
                    //console.log(buffer)
                    self.udp.send(buffer)
                }
            }    
        }
    }
    return cardObject
}

function ValToHex(val, card) {
    //console.log('value and cardtype ',val, card)
    if (card == '10') {
        var value = (Math.round(val * 2.55))
    }
    else {
        var value = val
    }
    //console.log('value actions.js out', value)
    var hex = value.toString(16);
    //console.log('hex actions.js out',hex)
    return hex.length == 1 ? "0" + hex : hex;
}


