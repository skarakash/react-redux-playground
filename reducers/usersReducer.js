import { GET_USERS } from '../constants/index';

const users = (state = [], action, newstate) => {
    switch (action.type) {
        case GET_USERS:
            return state.concat(action.payload);
        default:
            return state;
    }
}

export default users;