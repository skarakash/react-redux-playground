import { ADD_NEWS, DELETE_NEWS, SAVE_EDITED, NEWS_EIDT_MODE, ABORT_EDITING } from '../constants/index';

export const addNews = (title, description, date, intDate) => ({
    type: ADD_NEWS,
    payload: {
        title, 
        description, 
        date,
        intDate
    }
});

export const deleteNews = id => ({
    type: DELETE_NEWS,
    id
});

export const newsToEditMode = id => ({
    type: NEWS_EIDT_MODE,
    id
});

export const saveEdited = (title, description, date, id, intDate, editMode) => ({
    type: SAVE_EDITED,
    payload: { title, description, date, id, intDate, editMode } 
});

export const abortEditing = id => ({
    type: ABORT_EDITING,
    id 
})