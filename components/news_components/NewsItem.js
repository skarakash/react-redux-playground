import React, { Component} from 'react';
import { connect } from 'react-redux';
import { deleteNews, newsToEditMode } from '../../actions/newsActions';

class NewsItem extends Component{
    render(){
        let { item, deleteNews, edit } = this.props;
        return (
            <div style={{display: item.editMode ? 'none': 'block'}}>
                <div className="container news_list">
                    <div className="row" >
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <span>{item.date}</span>
                        </div>
                        <button type="button" className="btn btn-info delete_news" onClick={() => deleteNews(item.id)}>Delete</button>
                        <button type="button" className="btn btn-info edit_news" onClick={() => edit(item.id)}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch => ({
        deleteNews: (id) => {
            dispatch(deleteNews(id))
        },
        edit: (id) => {
            dispatch(newsToEditMode(id))
        }
});

export default connect(null, mapDispatchToProps)(NewsItem);
