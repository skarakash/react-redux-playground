import React, {Component} from 'react';
import { addNews } from '../../actions/newsActions';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import moment from 'moment';
import { Link } from 'react-router';

class AddNewsForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            descriprion: '',
            date: '',
            intDate: ''
        };
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
        let { addNews } = this.props;
        let { title, description, date, intDate } = this.state;
        addNews(title, description, date, intDate);
        hashHistory.push('/news');
    };

    render(){
        return (
            <div className="container">
                <h1>Here you can add a news</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input name="title" type="text" className="form-control"  placeholder="Title" onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" type="text" className="form-control" placeholder="Description" onChange={this.handleInputChange} required/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <Link  to="/" type="button" className="btn btn-info">Back</Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
        addNews: (title, descriprion, date, intDate) => {
            dispatch(addNews(title, descriprion, date, intDate))
        }
});

export default connect(null, mapDispatchToProps)(AddNewsForm);