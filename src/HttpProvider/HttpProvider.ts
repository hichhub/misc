import IHttpProvider, {IHttpRequest, IHttpResponse} from "./IHttpProvider";
import axios from "axios";

export default class HttpProvider implements IHttpProvider {
	send(request: IHttpRequest): Promise<IHttpResponse> {
		return axios({
			data: request.body,
			url: request.url,
			headers: request.header,
			method: request.method,
		}).then(response => {
			const responseObj: IHttpResponse= {
				statusCode: response.status,
				body: response.data.data,
				header: response.headers,
			};
			return responseObj;

		});
	}

}