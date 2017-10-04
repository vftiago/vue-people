import { Client } from './base';
import { ApiConfig } from './config';

export default {
	async getAll() {
		return Client.extractData( await Client.get( '/persons', ApiConfig.apiToken ) );
	}
};
