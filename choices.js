
import {Regex } from '@companion-module/base'
import {MODELS, CARDS } from './models.js'

export function getKBchoices(self) {
    return [
        {
            type: 'static-text',
            id: 'info',
            width: 12,
            label: 'Information',
            value:
                'Select the IP, port, size and cardconfiguration of the Kissbox',
        },
        {
            type: 'textinput',
            id: 'host',
            label: 'Target IP',
            tooltip: 'The IP of the Kissbox',
            default: '0.0.0.0',
            width: 5,
            regex: Regex.IP,
        },

        {
            type: 'textinput',
            id: 'port',
            label: 'Target Port',
            width: 4,
            default: '9813',
            regex: Regex.PORT,
        },
        {
            type: 'textinput',
            id: 'host2',
            label: 'Source IP',
            tooltip: 'The IP of this device',
            default: '0.0.0.0',
            width: 5,
            regex: Regex.IP,
        },
        {
            type: 'textinput',
            id: 'portin',
            label: 'Source Port',
            width: 4,
            default: '9814',
            regex: Regex.PORT,
        },
        {
            type: 'dropdown',
            id: 'model',
            label: 'Select Your Kissbox Model',
            width: 5,
            default: '1',
            choices: MODELS,
        },
        {
            type: 'checkbox',
            label: 'Show outputs in variablelist',
            id: 'inputVars',
            default: false
        },
        {
            type: 'static-text',
            id: 'info',
            width: 12,
            label: 'Information',
            value: 'Select the type of IO-card inserted in the slot. ' ,
        },
        {
            type: 'dropdown',
            id: 'slot1',
            label: 'slot 1',
            width: 4,
            choices: CARDS,
            default: '4',
        },
        {
            type: 'dropdown',
            id: 'slot2',
            label: 'slot 2',
            width: 4,
            choices: CARDS,
            default: '4',
        },
        {
            type: 'dropdown',
            id: 'slot3',
            label: 'slot 3',
            width: 4,
            choices: CARDS,
            default: '4',
        },
        {
            type: 'dropdown',
            id: 'slot4',
            label: 'slot 4',
            width: 4,
            choices: CARDS,
            default: '4',
            isVisible: (configValues) => configValues.model === '2',
        },
        {
            type: 'dropdown',
            id: 'slot5',
            label: 'slot 5',
            width: 4,
            choices: CARDS,
            default: '4',
            isVisible: (configValues) => configValues.model === '2',
        },
        {
            type: 'dropdown',
            id: 'slot6',
            label: 'slot 6',
            width: 4,
            choices: CARDS,
            default: '4',
            isVisible: (configValues) => configValues.model === '2',
        },
        {
            type: 'dropdown',
            id: 'slot7',
            label: 'slot 7',
            width: 4,
            choices: CARDS,
            default: '4',
            isVisible: (configValues) => configValues.model === '2',
        },
        {
            type: 'dropdown',
            id: 'slot8',
            label: 'slot 8',
            width: 4,
            choices: CARDS,
            default: '4',
            isVisible: (configValues) => configValues.model === '2',
        }
    ]
}

