<template>
    <div class="avatar" v-bind:style="style">
        <span v-if="!this.src">{{ userInitials }}</span>
    </div>
</template>

<script type="text/babel">
	export default {
		name: 'avatar',
		props: {
			username: {
				type: String,
				required: true
			},
			initials: {
				type: String
			},
			size: {
				type: Number,
				default: 50
			},
			src: {
				type: String
			}
		},

		computed: {
			isImage() {
				return this.src !== undefined;
			},
			style() {
				const style = {
					width: this.size + 'px',
					height: this.size + 'px'
				};

				const imgBackgroundAndFontStyle = {
					background: 'url(' + this.src + ') no-repeat',
					backgroundOrigin: 'content-box'
				};

				const initialBackgroundAndFontStyle = {
					font: Math.floor( this.size / 2.5 ) + 'px/100px Open Sans, Arial, sans-serif',
					lineHeight: ( this.size ) + 'px'
				};

				const backgroundAndFontStyle = ( this.isImage )
					? imgBackgroundAndFontStyle
					: initialBackgroundAndFontStyle;

				Object.assign( style, backgroundAndFontStyle );

				return style
			},
			userInitials() {
				const initials = this.initials || this.getInitials( this.username );
				return initials
			}
		},
		methods: {
			getInitials ( username ) {
				let parts = username.split( /[ -]/ );
				let initials = '';

				for ( var i = 0; i < parts.length; i++ ) {
					initials += parts[ i ].charAt( 0 )
				}

				if ( initials.length > 3 && initials.search( /[A-Z]/ ) !== -1 ) {
					initials = initials.replace( /[a-z]+/g, '' )
				}

				initials = initials.substr( 0, 3 ).toUpperCase();

				return initials;
			}
		}
	}
</script>

<style scoped lang="stylus">
    .avatar
        text-align center
        vertical-align middle
        display block
        margin-top 6px
        margin-right 18px
        -webkit-border-radius 50%
        -moz-border-radius 50%
        border-radius 50%
        color dodgerblue
        background-color lightskyblue
</style>
