import initialState from './initialState';

function rootReducer(state = initialState, action) {
	let books, bag;
	switch (action.type) {
		case 'ADD_BOOK':
			bag = [...state.bookBag];
			if (bag.includes(action.bookID)) {
				return state;
			} else {
				books = [...state.books];
				for (let item of books) {
					if (item.id === action.bookID) {
						item.status = 3;
					}
				}
				bag.push(action.bookID);
				return { ...state, books: books, bookBag: bag };
			}
		case 'REMOVE_BOOK':
			bag = [...state.bookBag];
			if (bag.includes(action.bookID)) {
				books = [...state.books];
				for (let item of books) {
					if (item.id === action.bookID) {
						item.status = 1;
					}
				}
				bag = bag.filter(item => {
					if (item === action.bookID) {
						return false;
					} else {
						return true;
					}
				})
				return { ...state, books: books, bookBag: bag };
			} else {
				return state;
			}
		case 'ADD_HOLD':
			books = [...state.books];
			for (let item of books) {
				if (item.id === action.bookID) {
					item.status = 4;
				}
			}
			return { ...state, books: books };
		case 'REMOVE_HOLD':
			books = [...state.books];
			for (let item of books) {
				if (item.id === action.bookID) {
					item.status = 2;
				}
			}
			return { ...state, books: books };
		default:
			return state;
	}
}

export default rootReducer;