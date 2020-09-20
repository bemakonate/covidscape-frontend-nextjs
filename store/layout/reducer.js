import { updatedObj } from '../../constants/helpers';
import * as actionTypes from './actionTypes';

const initialState = {
    flashMessage: null,
    isFlashMessageOpen: false,
    flashMessageProps: {},
    products: [],
    categories: [],
}

const openFlashMessage = (state, action) => updatedObj(state, {
    flashMessage: action.payload.message,
    flashMessageProps: action.payload.props,
    isFlashMessageOpen: true,
})



const closeFlashMessage = (state, action) => updatedObj(state, {
    flashMessage: '',
    flashMessageProps: null,
    isFlashMessageOpen: false,

})

const setProductsGlobalState = (state, action) => updatedObj(state, {
    products: action.payload.products,
})

const setCategoriesGlobalState = (state, action) => updatedObj(state, {
    categories: action.payload.categories
})
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_FLASH_MESSAGE: return openFlashMessage(state, action);
        case actionTypes.CLOSE_FLASH_MESSAGE: return closeFlashMessage(state, action);
        case actionTypes.SET_PRODUCTS_GLOBAL_STATE: return setProductsGlobalState(state, action);
        case actionTypes.SET_CATEGORIES_GLOBAL_STATE: return setCategoriesGlobalState(state, action);
        default:
            return state
    }
}
export default reducer;