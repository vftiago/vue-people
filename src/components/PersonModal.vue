<template>
    <modal name="person-modal" id="person-modal" :resizeable=true :height="600" :width="500" v-on:before-open="beforeOpen">
        <div id="modal-content">
            <div id="modal-header" class="pa3 bb b--black-10">
                <h4 class="f4 b ">Person Information</h4>
            </div>
            <div id="modal-body">
                <div id="mast" class="b pa4">
                    <avatar :size="100" v-bind:username="person.name"></avatar>
                    <p v-if="person.name" class="f3 mt4 mb2">{{person.name}}</p>
                    <a v-if="person.phone" class="f4">{{person.phone[ 0 ].value}}</a>
                    <hr class="mt4 b--black-10"/>
                </div>
            </div>
            <div id="modal-footer" class="b pa3 bt b--black-10">
                <button class="b ba pa1 pl3 pr3 b--black-10">Back</button>
            </div>
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

<style scoped lang="stylus">
    a {
        color: #42b983;
    }

    #modal-body {
        text-align: center
        .avatar {
            margin: 0 auto
            height: 60px
            width: 60px
        }
    }

    #modal-content {
        height: 100%;
    }

    #modal-header {
        background-color: #eee;
    }

    #modal-footer {
        background-color: #eee;
        border-radius: 0;
        bottom:0px;
        position:absolute;
        width:100%;
        button {
            float: right
        }
    }
</style>