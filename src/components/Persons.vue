<template>
    <div class="persons">
        <person-modal></person-modal>
        <div id="mast" class="f3 b bb b--black-10">
            <h2 class="ttc">People's List</h2>
            <input type="text" v-model="searchKey">
        </div>
        <div id="content">
            <draggable :list="persons" class="dragArea list pl0 mt0">
                <li v-for="person in filteredPersons" class="list-item pa2 ba b--black-10">
                    <a v-on:click="showModal( person )">
                        <avatar :size="50" :src="person.pictureUrl" :username="person.name"></avatar>
                        <div class="pl3">
                            <div class="f5 pt2 pb2">
                                <span>{{person.name}}</span>
                            </div>
                            <div class="f6 pt2 pb2 gray">
                                <div v-if="person.org_name">
                                    <span class="hasIcon org">{{person.org_name}}</span>
                                </div>
                                <div v-else>
                                    <span>No organization defined</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </draggable>
        </div>
    </div>
</template>

<script>
	import Draggable from 'vuedraggable';
	import Avatar from './Avatar.vue';
	import PersonModal from './PersonModal.vue';
	import Persons from '@/api/persons';
	import transformers from '@/transformers/transformers';

	export default {
		name: 'persons',
        data: function() {
			return {
				persons: [],
				searchKey: ''
            }
        },
		methods: {
			async fetchPersons(){
				const persons = await Persons.getAll();
				this.persons = transformers.personsTransformer( persons.data );
			},
			showModal( person ) {
				this.$modal.show( 'person-modal', { person: person } );
			}
		},
		computed: {
			filteredPersons(){
				if ( this.searchKey.length === 0 ) return this.persons;
                return this.persons.filter( ( person ) => person.name.toLowerCase().includes( this.searchKey.toLowerCase() ) );
			}
		},
		created(){
			this.fetchPersons();
		},
		components: {
			Avatar,
			Draggable,
            PersonModal
		}
	}
</script>

<style scoped lang="stylus">
    #content
        text-align left

    #mast
        padding 30px 20px

    .dragArea
        min-height 10px

    .list-item
        margin 12px 15px
        .avatar
            float right

    .hasIcon
        padding 8px 0 0 23px
        position relative
        vertical-align baseline
        -moz-border-bottom-colors none
        -moz-border-left-colors none
        -moz-border-right-colors none
        -moz-border-top-colors none

    .hasIcon::after
        background-image url( "./../assets/application_icons.png" )
        background-repeat no-repeat
        background-size auto 396px
        content " "
        height 16px
        left 0
        position absolute
        top 8px
        visibility visible
        width 16px

    .hasIcon.org::after
        background-position -16px 0px
</style>
