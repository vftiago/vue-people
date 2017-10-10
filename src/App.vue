<template>
    <div id="app">
        <div id="header">
            <div id="logo"></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style lang="stylus">
    @import 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css';
    @import 'https://unpkg.com/tachyons@4.8.1/css/tachyons.min.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

    #logo
        height: 48px
        width: 122px
        background-image: url( 'assets/logo.svg' )
        background-position: 12px 12px
        background-repeat: no-repeat

    #app
        font-family: 'Open Sans', Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        color: #2c3e50

    #header
        background-color: rgb(64, 67, 70)
        height: 48px
        width: 100%

    div.v--modal-box.v--modal
        top: 10em !important; // overrides ridiculous top positioning on vue-js-modal
</style>
