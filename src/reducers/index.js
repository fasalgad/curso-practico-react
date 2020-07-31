/* eslint-disable no-case-declarations */
/* eslint-disable no-tabs */
/* eslint-disable indent */
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_FAVORITE':
			const exist = state.mylist.find((item) => item.id === action.payload.id);
			if (exist) return { ...state };

			return {
				...state,
				mylist: [...state.mylist, action.payload],
			};
		case 'DELETE_FAVORITE':
			return {
				...state,
				mylist: state.mylist.filter((items) => items.id !== action.payload),
			};
		default:
			return state;
	}
};
export default reducer;
