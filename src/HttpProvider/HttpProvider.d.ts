import IHttpProvider, { IHttpRequest, IHttpResponse } from "./IHttpProvider";
export default class HttpProvider implements IHttpProvider {
    send(request: IHttpRequest): Promise<IHttpResponse>;
}
