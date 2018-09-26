import { EventEmitter2, ConstructorOptions} from "eventemitter2";

export interface IEventServerConfig extends ConstructorOptions{}
export interface IEventEmitter extends EventEmitter2{}

export default class EventHandler {
	static instances: {[key: string] : EventHandler} = {};
	private server: IEventEmitter;

	private defaultConfig: ConstructorOptions = {
		wildcard: true,

	};

	private constructor(config?: IEventServerConfig) {
		this.server = new EventEmitter2(config || this.defaultConfig);
	}

	static getInstance(instanceName: string, config?: IEventServerConfig): IEventEmitter {
		if (!this.instances[instanceName]) {
			this.instances[instanceName] = new EventHandler(config);
		}

		return this.instances[instanceName].server;
	}

	static getInstances() {
		return this.instances;
	}

}