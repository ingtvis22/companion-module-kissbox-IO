
let variablesSlots = []
let variables = []
let vars = []

export function initVariables(self) {
  
    for (var t = 1; t < 9; t++) {
        var slot = ('self.config.slot'+ t)
        switch (eval(slot)) {
            case '7':
                var type = 'Digital'
                variables = getVariableData(type, t, variables)
            break;
            case '9':
                type = 'Analog'
                variables = getVariableData(type, t, variables)
            break;
            case '8':
                if (self.config.inputVars === true) {
                    type = 'Digital OUT'
                    variables = getVariableData(type, t, variables)
                }
            break;
            case '10':
                if (self.config.inputVars === true) {
                    type = 'Analog OUT'
                    variables = getVariableData(type, t, variables) 
                }
                break;
            case '6':
                if (self.config.inputVars === true) {
                    type = 'Relay OUT'
                    variables = getVariableDataRelay(type, t, variables) 
                }
            break;
            }
        }
	this.setVariableDefinitions(variables)
}


function getVariableData(type, t, variables) {
    for (var i = 1; i < 9; i++) {
        variablesSlots = [ 
            {
                variableId: 'slot' + t + 'contact'+ i, name: 'Slot-' + t + ' Contact-' + i + ' ' + type
            }
        ]
        vars = variables.concat(variablesSlots)
        variables = vars   
    }
    return variables
}

function getVariableDataRelay(type, t, variables) {
    for (var i = 1; i < 5; i++) {
        variablesSlots = [ 
            {
                variableId: 'slot' + t + 'contact'+ i, name: 'Slot-' + t + ' Contact-' + i + ' ' + type
            }
        ]
        vars = variables.concat(variablesSlots)
        variables = vars   
    }
    return variables
}





// write contact-values to variables
export async function updateVariables(message, self) {
    let variableData = incommingMessage(message, self)
    console.log('vardata', variableData)
	this.setVariableValues(
        variableData
	)
}
// check one or all contacts
    function incommingMessage(message, self) {
        let messageArray = new Int32Array(message);
        let slot = ('self.config.slot'+(messageArray[1]+1))

// 161 is read all command
        if (messageArray[0] == 161) {
            console.log('All channel answer')
            let outputData = {}
            for (let i = 0; i < 8; i++) {
                let varname = ('slot'+(messageArray[1]+1)+'contact'+(i+1))
                if (eval(slot)  == '9' || eval(slot)  == '10') {
                    var value = (Math.round(messageArray[2+i] / 2.55))
                }
                else {
                    value = (messageArray[2+i])
                }
                outputData[varname] = value
            }   
            return(outputData)
        }
        else if (messageArray[0] == 163) {
            console.log('One channel answer')
            let varname = ('slot'+(messageArray[1]+1)+'contact'+(messageArray[2]+1))
            if (eval(slot)  == '9' || eval(slot)  == '10') {
                var value = (Math.round(messageArray[3] / 2.55))
            }
            else {
                value = (messageArray[3])
            }
            let outputData = {varname: value}
            Object.keys(outputData).forEach(function(key) {
                outputData[varname] = outputData[key];
                delete outputData[key];
            });
        
            console.log(varname, value)

            return(outputData)
        }
    }
