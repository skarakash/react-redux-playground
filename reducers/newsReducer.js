import { ADD_NEWS, DELETE_NEWS, NEWS_EIDT_MODE, SAVE_EDITED, ABORT_EDITING } from '../constants/index';
import { v4 } from 'node-uuid';

const news = (state = [], action, newstate) => {
    switch (action.type) {
        case ADD_NEWS:
            return [ ...state, {
                title: action.payload.title,
                description:action.payload.description, 
                date:action.payload.date,
                intDate: action.payload.intDate, 
                id: v4(),
                editMode: false
            }];

        case DELETE_NEWS:
            return state = state.filter(item => item.id !== action.id);

        case NEWS_EIDT_MODE:
            return state.map(item => {
                if(item.id === action.id){
                    return Object.assign({}, item, {editMode: true})
                } else {
                    return item
                }
            });
        case SAVE_EDITED: 
            return state.map(item => {
                if(item.id === action.payload.id){
                    return Object.assign({}, item, {
                        title: action.payload.title,
                        description:action.payload.description, 
                        date:action.payload.date,
                        intDate: action.payload.intDate,
                        editMode: false
                    })
                } else {
                    return item
                }
            });

         case ABORT_EDITING:
            return state.map(item => {
                if(item.id === action.id){
                    return Object.assign({}, item, {editMode:false})
                } else {
                    return item
                }
            });

        default:
            return state;
    }
}

export default news;