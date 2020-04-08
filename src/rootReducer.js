import initialState from './initialState';

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state;
		case 'REMOVE_TODO':
			return state;
		default:
			return state;
	}
}

export default rootReducer;