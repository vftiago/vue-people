<template>
    <modal name="person-modal" id="person-modal" :height="600" :width="400" v-on:before-open="beforeOpen">
        <div id="modal-content">
            <div id="modal-header" class="pa3 bb b--black-10">
                <h4 class="f4 b ">Person Information</h4>
            </div>
            <div id="modal-body">
                <avatar v-bind:username="person.name"></avatar>
            </div>
            <p>{{person.name}}</p>
        </div>
    </modal>
</template>
<script>
	import Avatar from './Avatar.vue';

	export default {
		name: 'person-modal',
		data () {
			return {
				person: {
					name: ''
                }
			}
		},
		methods: {
			beforeOpen (event) {
				this.person = event.params.person;
			}
		},
		components: {
			Avatar
		}
	}
</script>
<style>
    #modal-content {
        height: 100%;
    }

    #modal-header {
        background-color: #eee;
    }
</style>