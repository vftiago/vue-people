<template>
    <div class="persons">
        <div id="mast" class="bb b--black-10">
            <h2>People's list</h2>
        </div>
        <div id="content">
            <draggable :list="persons" class="dragArea list pl0 mt0">
                <li v-for="person in persons" class="list-item pa2 ba b--black-10">
                    <avatar class="avatar" v-bind:username="person.name"></avatar>
                    <div class="pl3">
                        <div class="f5 pt2 pb2">
                            <span>{{person.name}}</span>
                        </div>
                        <div class="f6 pt2 pb2 gray">
                            <div v-if="person.org_name">
                                <span class="hasIcon">{{person.org_name}}</span>
                            </div>
                            <div v-else>
                                <span>No organization defined</span>
                            </div>
                        </div>
                    </div>
                </li>
            </draggable>
        </div>
    </div>
</template>

<script>
	import Draggable from 'vuedraggable';
	import Avatar from './Avatar.vue';
	import Persons from '@/api/persons';

	export default {
		name: 'persons',
		asyncComputed: {
			persons: {
				async get() {
					const persons = await Persons.getAll();
					return persons.data;
				},
				default: []
			}
		},
		components: {
			Avatar,
			Draggable
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #content {
        text-align: left;
    }

    #mast {
        padding: 30px 20px;
    }

    .dragArea{
        min-height: 10px;
    }

    .list-item {
        margin:12px 15px;
    }

    a {
        color: #42b983;
    }

    .hasIcon {
        padding: 8px 0 0 23px;
        position: relative;
        vertical-align: baseline;
        -moz-border-bottom-colors: none;
        -moz-border-left-colors: none;
        -moz-border-right-colors: none;
        -moz-border-top-colors: none;
    }

    .hasIcon::after {
        background-image: url("./../assets/application_icons.png");
        background-position: -16px 0px;
        background-repeat: no-repeat;
        background-size: auto 396px;
        color: rgb(38, 41, 44);
        content: " ";
        height: 16px;
        left: 0;
        position: absolute;
        top: 8px;
        visibility: visible;
        width: 16px;
    }
</style>
