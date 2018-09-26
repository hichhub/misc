import { EventEmitter2, ConstructorOptions } from "eventemitter2";
export default class EventHandler {
    static instances: {
        [key: string]: EventHandler;
    };
    private server;
    private defaultConfig;
    private constructor();
    static getInstance(instanceName: string, config?: ConstructorOptions): EventEmitter2;
}
