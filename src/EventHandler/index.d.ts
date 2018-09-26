import { EventEmitter2, ConstructorOptions } from "eventemitter2";
export interface IEventServerConfig extends ConstructorOptions {
}
export interface IEventEmitter extends EventEmitter2 {
}
export default class EventHandler {
    static instances: {
        [key: string]: EventHandler;
    };
    private server;
    private defaultConfig;
    private constructor();
    static getInstance(instanceName: string, config?: IEventServerConfig): IEventEmitter;
    static getInstances(): {
        [key: string]: EventHandler;
    };
}
