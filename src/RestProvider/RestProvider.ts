import IRestProvider from "./IRestProvider";
import IHttpProvider, {IHttpRequest, IHttpResponse} from "./../HttpProvider/IHttpProvider";

export default class RestProvider<T> implements IRestProvider<T> {

	private httpProvider: IHttpProvider;
	private inspectorFn: (request:IHttpRequest)=> IHttpRequest;

	constructor(baseUrl: string, httpProvider: IHttpProvider, inspectorFn: (request:IHttpRequest)=> IHttpRequest ){
		this.httpProvider = httpProvider;
		this.inspectorFn = inspectorFn;
	}

	protected request(request: IHttpRequest): Promise<IHttpResponse> {
		return this.httpProvider.send(this.inspectorFn(request));
	}

	async create(url: string, model: T): Promise<T> {
		const result = await this.request({
			method: "POST",
			url,
			body: JSON.stringify(model),
		});
		if (result.statusCode >= 200 && result.statusCode < 400 && result.body){
			return JSON.parse(result.body) as T;
		} else {
			throw result;
		}
	}

	async delete(url: string): Promise<boolean> {
		const result = await this.request({
			method: "DELETE",
			url,
		});
		if (result.statusCode >= 200 && result.statusCode < 400){
			return true;
		} else {
			throw result;
		}	}

	async edit(url: string, model: T): Promise<T> {
		const result = await this.request({
			method: "POST",
			url,
			body: JSON.stringify(model),
		});
		if (result.statusCode >= 200 && result.statusCode < 400 && result.body){
			return JSON.parse(result.body) as T;
		} else {
			throw result;
		}
	}

	async get(url: string): Promise<T> {
		const result = await this.request({
			method: "GET",
			url
		});
		if (result.statusCode >= 200 && result.statusCode < 400 && result.body){
			return JSON.parse(result.body) as T;
		} else {
			throw result;
		}
	}

	async search(url: string, query: Object): Promise<T[]> {
		const result = await this.request({
			method: "POST",
			url,
			body: JSON.stringify(query),
		});
		if (result.statusCode >= 200 && result.statusCode < 400 && result.body){
			return JSON.parse(result.body) as T[];
		} else {
			throw result;
		}
	}

}