import { EventEmitter2, ConstructorOptions} from "eventemitter2";

export default class EventHandler {
	static instances: {[key: string] : EventHandler} = {};
	private server: EventEmitter2;

	private defaultConfig: ConstructorOptions = {
		wildcard: true,

	};

	private constructor(config?: ConstructorOptions) {
		this.server = new EventEmitter2(this.defaultConfig);
	}

	static getInstance(instanceName: string, config?: ConstructorOptions): EventEmitter2 {
		if (!this.instances[instanceName]) {
			this.instances[instanceName] = new EventHandler(config);
		}

		return this.instances[instanceName].server;
	}

}