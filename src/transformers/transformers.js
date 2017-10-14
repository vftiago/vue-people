const personsTransformer = ( data ) => data.map( function( item ) {
	if ( item[ 'picture_id' ] ) {
		item.pictureUrl = item[ 'picture_id' ][ 'pictures' ][ 128 ]
	}
	return item;
});

export default { personsTransformer }