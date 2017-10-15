import axios from 'axios';
import { ApiConfig } from './config';

const Client = axios.create( {
	baseURL: ApiConfig.baseUrl,
	headers: {
		Accept: 'application/json'
	}
} );

Client.extractData = function ( result ) {
	return result.data;
};

export { Client };
