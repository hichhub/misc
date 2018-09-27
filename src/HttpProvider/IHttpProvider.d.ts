export interface IHttpRequest {
    method: "GET" | "POST" | "DELETE" | "PATCH" | string;
    url: string;
    header?: {
        [key: string]: string;
    };
    body?: string;
}
export interface IHttpResponse {
    statusCode: number;
    header?: {
        [key: string]: string;
    };
    body?: string;
}
export default interface IHttpProvider {
    send(request: IHttpRequest): Promise<IHttpResponse>;
}
