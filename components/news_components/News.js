import React, { Component} from 'react';
import { Link } from 'react-router';
import AddNewsForm from './AddNewsForm';
import NewsItem from './NewsItem';
import EditNewsForm from './EditNewsForm';
import { connect } from 'react-redux';
import { deleteNews } from '../../actions/newsActions';

class News extends Component{
       constructor(){
        super();
        this.state={
            term: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            term: e.target.value
        })
    } 
    render(){
        let { news } = this.props;
        let filtered = news.filter(item => item.title.toLowerCase().indexOf(this.state.term) !== -1);
        return (
            <div className="container">
                <h1>News page</h1>
                <Link  to="/addnews" type="button" className="btn btn-info add_news">{news.length ? 'Add another news' : 'Add news'}</Link>
                    <div style={{display: news.length ? 'block': 'none'}}>
                        <label htmlFor="titlesearch">Search by title</label>
                        <input id="titlesearch" type="text" className="form-control search" onChange={this.handleChange}/>
                </div>
                {filtered.map(item => {
                    return (
                        <div key={item.id}>
                            <NewsItem item={item} />
                            <EditNewsForm item={item} />
                        </div> 
                    )
                })}
                
                <Link  to="/" type="button" className="btn btn-info back">Back</Link>
            </div>
        )
    }
}; 

const mapStateToProps = state => {
    let { news} = state;
    if(news.length > 1){
        news = news.sort(function(a,b) {return (a.intDate > b.intDate) ? -1 : ((b.intDate > a.intDate) ? 1 : 0);} );
    }
    return {news}
};

export default connect(mapStateToProps)(News);