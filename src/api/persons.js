import { Client } from './base';
import { ApiConfig } from './config';

function buildUrl( endPoint ) {
	"use strict";
	return endPoint + '?api_token=' + ApiConfig.authToken;
}

export default {
	async getAll() {
		return Client.extractData( await Client.get( buildUrl( '/persons' ) ) );
	}
};
