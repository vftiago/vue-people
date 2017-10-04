<template>
    <div id="app">
        <div id="header">Pipedrive</div>
        <img src="./assets/logo.png">
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style lang="stylus">
    @import 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'

    #app {
        font-family: 'Open Sans', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #header {
        background-color: rgb(38, 41, 44);
        height: 80px;
        width: 100%;
    }
</style>
