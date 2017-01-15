import { GET_SNEWS } from '../constants/index';

const sportNews = (state=[], action) => {
    switch (action.type) {
        case GET_SNEWS:
            return state.concat(action.payload)
        default:
            return state;
    }
};

export default sportNews;