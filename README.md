# vue-people

> A Vue.js project

##Important!

You will need to create a `config.js` file within `@/src/api` for the api to work correctly.
The file needs to have the following structure:

```
const ApiConfig = {
	baseUrl: 'https://your-company-name.com/v1',
	apiToken: 'your-auth-token'
};

export { ApiConfig };
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
