import IHttpProvider, { IHttpRequest, IHttpResponse } from "./IHttpProvider";
import axios from "axios";

const SERVER_ERROR_PATH = "/500";

export default class HttpProvider implements IHttpProvider {
	send(request: IHttpRequest): Promise<IHttpResponse> {
		let responseObj: IHttpResponse;

		setTimeout(() => {
			if (!responseObj) {
				location.replace(SERVER_ERROR_PATH);
			}
		}, 5000);

		return axios({
			data: request.body,
			url: request.url,
			headers: request.header,
			method: request.method,
		}).then(response => {
			responseObj = {
				statusCode: response.status,
				body: response.data.data,
				header: response.headers,
			};
			return responseObj;
		});
	}
}
