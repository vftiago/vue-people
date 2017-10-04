# vue-people

> A Vue.js project

##Important!

You will need to create a `config.js` file within `@/src/api` for the api to work correctly.
The file needs to have the following structure:

```
let ApiConfig = {
	baseUrl: 'https://your-company-name.com/v1',
	authToken: 'your-auth-token'
};

export { ApiConfig };
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
