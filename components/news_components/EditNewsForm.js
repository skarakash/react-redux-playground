import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEdited, abortEditing } from '../../actions/newsActions';
import moment from 'moment';


class EditNewsForm extends Component{
     constructor(props){
        super(props);
        let { item } = this.props;
        this.state = {
            id: item.id,
            title: item.title,
            description: item.description,
            date: item.date,
            intDate: item.intDate,
            editMode: item.editMode
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
     };

    handleInputChange(e){
        this.setState({
            [e.target.name] : e.target.value,
            date: moment().format('HH:mm') + ', ' + moment().format('DD.MM.YY'),
            intDate: Date.now() 
        });
    };

    handleFormSubmit(e){
        e.preventDefault();
        let { saveEdited } = this.props;
        let { title, description, date, id, intDate, editMode } = this.state;
        console.log(this.state)
        saveEdited(title, description, date, id, intDate, editMode)
    }

    render(){
        let { item, abortEditing } = this.props;
        return (
            <div style={{display: item.editMode ? 'block' : 'none'}}>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input name="title" type="text" className="form-control" defaultValue={item.title} placeholder="Title" onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" type="text" className="form-control" defaultValue={item.description} placeholder="Description" onChange={this.handleInputChange} required/>
                    </div>
                    <button type="submit" className="btn btn-default edit_news">Submit</button>
                    <button className="btn btn-info" onClick={()=> abortEditing(item.id)}>Cancel</button>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    saveEdited: (title, description, date, id, intDate, editMode) => {
        dispatch(saveEdited(title, description, date, id, intDate, editMode))
    },
    abortEditing: (id) => {
        dispatch(abortEditing(id))
    }
});

export default connect(null, mapDispatchToProps)(EditNewsForm);