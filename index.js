import { InstanceBase, InstanceStatus, Regex, runEntrypoint, UDPHelper } from '@companion-module/base'
import {getKBchoices} from './choices.js'
import { getActionDefinitions } from './actions.js'
import { initVariables, updateVariables } from './variables.js'


class KissboxInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
		this.initVariables = initVariables
		this.updateVariables = updateVariables
	}

	async init(config) {
		this.config = config
		if (this.udp) {
			this.udp.destroy()
			delete this.udp
		}
		this.udp = new UDPHelper(this.config.host, this.config.port, {bind_port: this.config.portin, bind_ip: this.config.host2})
		this.udp.on('error', (err) => {
			this.log('error', 'Network error: ' + err.message)
		})
		// If the status is 'listening', connection should be established
		this.udp.on('listening', () => {
			this.log('info', 'UDP listening')
			console.log('Listining on ', 'Address: ', config.host2, ' on Port: ', config.portin)
			this.updateStatus(InstanceStatus.Ok)
		})
		this.udp.on('data', (message, info) => {
	
			//console.log('Message from index.js', toArrayBuffer(message))
			
			this.updateVariables(message, this)

			const response = Buffer.from('Message Received')

			})	  
		this.udp.on('status_change', (status) => {
			this.updateStatus(status)
		})

		this.setActionDefinitions(getActionDefinitions(this))
		this.initVariables(this)

		getInitContactValues(this)
	}

	async destroy() {
		if (this.udp) {
			this.udp.destroy()
			delete this.udp
		}
		this.log('debug', 'destroy')
	}
	
	async configUpdated(config) {
		this.config = config
		if (this.udp) {
			this.udp.destroy()
			delete this.udp
		}
		this.udp = new UDPHelper(this.config.host, this.config.port)
		this.udp.on('error', (err) => {
			this.log('error', 'Network error: ' + err.message)
		})
		this.udp.on('status_change', (status, message) => {
			this.status(status, message)
		})
		this.setActionDefinitions(getActionDefinitions(this))

		getInitContactValues(this)
	}

	getConfigFields() {
		return getKBchoices(this)
	}
}

function toArrayBuffer(buffer) {
	const view = new Int32Array(buffer);
	return view
}

function sleep(miliseconds) {
	var currentTime = new Date().getTime();
	while (currentTime + miliseconds >= new Date().getTime()) {
	}
}

function getInitContactValues(self) {
	//more then 4000 breaks the code due to timeout
	sleep(4000)
	//console.log('I waited 4 seconds')
	if (self.config.model == '1') {
		for (let i=0; i<3; i++) {
			console.log('A00'+i)
			const buffer = Buffer.from('A00'+i, 'hex');
			self.udp.send(buffer)
		}
	}	
	else {
		for (let i=0; i<8; i++) {
			console.log('A00'+i)
			const buffer = Buffer.from('A00'+i, 'hex');
			self.udp.send(buffer)
		}
	}
}

runEntrypoint(KissboxInstance, [])
