import {DELETE_ARTICLE, INCREMENT, CHANGE_SELECTION, CHANGE_DATE_RANGE} from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeSelection(dateRange, selected){
    return {
        type: CHANGE_SELECTION
    }
}

export function changeDateRange(){
    return {
        type: CHANGE_DATE_RANGE
    }
}