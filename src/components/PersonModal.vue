<template>
    <modal name="person-modal" :height="height" :width="500" v-on:before-open="beforeOpen">
        <div id="modal-content">
            <div id="modal-header" class="pa3 bb b--black-10">
                <div id="close" @click="$modal.hide('person-modal')"></div>
                <h4 class="f4 b">Person Information</h4>
            </div>
            <div id="modal-body">
                <div id="mast" class="b pa4">
                    <avatar :size="100" :src="person.pictureUrl" :username="person.name"></avatar>
                    <p v-if="person.name" class="f3 mt4 mb2">{{person.name}}</p>
                    <a v-if="person.phone" class="f4">{{person.phone[ 0 ].value}}</a>
                    <hr class="mt4 b--black-10"/>
                </div>
                <div id="content" class="ph4 w-100 gray">
                    <div v-if="person.email.value" class="">
                        <div class="fl w-30 tr">
                            <div class="b pv2 gray">Email</div>
                        </div>
                        <div class="fl w-70">
                            <div class="pv2 pl3 light-silver">{{person.email.value}}</div>
                        </div>
                    </div>
                    <div v-if="person.org_name" class="">
                        <div class="fl w-30 tr">
                            <div class="b pv2 gray">Organization</div>
                        </div>
                        <div class="fl w-70">
                            <div class="pv2 pl3 light-silver">{{person.org_name}}</div>
                        </div>
                    </div>
                    <div v-if="person.owner_name" class="">
                        <div class="fl w-30 tr">
                            <div class="b pv2 gray">Assistant</div>
                        </div>
                        <div class="fl w-70">
                            <div class="pv2 pl3 light-silver">{{person.owner_name}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modal-footer" class="b pa3 bt b--black-10">
                <button @click="$modal.hide('person-modal')" class="b ba pa1 ph3 b--black-20">Back</button>
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
				height: '600px',
				person: {
					name: '',
                    email: {
						value: ''
                    },
					org_name: '',
					owner_name: ''
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

<style lang="stylus" scoped>
    a
        color #42b983
    button
        background-color #fefefe

    #modal-content
        height 100%

    #modal-header
        background-color #efefef
        #close
            float right
            height 20px
            width 20px
            background-image url( '../assets/close.png' )
            background-repeat no-repeat center center
            background-size 20px 20px

    #modal-body
        #mast
            text-align center
        .avatar
            margin 0 auto
            height 60px
            width 60px
        #content
            text-align left

    #modal-footer
        background-color #efefef
        border-radius 0
        bottom 0px
        position absolute
        width 100%
        button
            float right
</style>