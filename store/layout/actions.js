import * as actionTypes from './actionTypes';

export const openFlashMessage = ({ message, props }) => {
    return {
        type: actionTypes.OPEN_FLASH_MESSAGE,
        payload: {
            message,
            props
        }

    }
}

export const closeFlashMessage = () => {
    return {
        type: actionTypes.CLOSE_FLASH_MESSAGE,
    }
}

export const setProductsGlobalState = ({ products }) => {
    return {
        type: actionTypes.SET_PRODUCTS_GLOBAL_STATE,
        payload: {
            products
        }
    }
}

export const setCategoriesGlobalState = ({ categories }) => {
    return {
        type: actionTypes.SET_CATEGORIES_GLOBAL_STATE,
        payload: { categories }
    }
}