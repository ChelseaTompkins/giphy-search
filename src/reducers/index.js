import { updateFavorites } from '../helpers';
import { FAVORITE_GIPH } from '../actions';

export default(state = {favorited: []}, action) => {
    switch(action.type){
        case FAVORITE_GIPH:
            return {...state, favorited: updateFavorites(action.giph, state.favorited)}
        default:
            return state;
    }
}                                                                        