<template>
    <div class="persons">
        <p>PEOPLE</p>
        <div v-for="person in persons">
            <p>{{person.name}}</p>
        </div>
    </div>
</template>

<script>
	import Persons from '@/api/persons';

	export default {
		name: 'persons',
		asyncComputed: {
			persons: {
				async get() {
					const persons = await Persons.getAll();
					return persons.data;
				},
				default: 'Loading...'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
