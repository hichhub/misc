import IRestProvider from "./IRestProvider";
import IHttpProvider, { IHttpRequest } from "./../HttpProvider/IHttpProvider";
export default class RestProvider<T> implements IRestProvider<T> {
    private httpProvider;
    private inspectorFn;
    constructor(baseUrl: string, httpProvider: IHttpProvider, inspectorFn: (request: IHttpRequest) => IHttpRequest);
    create(url: string, model: T): Promise<T>;
    delete(url: string): Promise<boolean>;
    edit(url: string, model: T): Promise<T>;
    get(url: string): Promise<T>;
    search(url: string, query: Object): Promise<T[]>;
}
