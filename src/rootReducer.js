import initialState from './initialState';

function rootReducer(state = initialState, action) {
	switch (action.type) {
		// case 'GET_BOOK':
		// 	return state.books.find(book => book.id === action.id);
		default:
			return state;
	}
}

export default rootReducer;