import { Client } from './base';
import { ApiConfig } from './config';

export default {
	async getAll() {
		return Client.extractData( await Client.get( '/persons', { params: { api_token: ApiConfig.apiToken } } ) );
	}
};
