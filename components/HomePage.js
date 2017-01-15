import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getSportNews } from '../actions/sportNewsActions';

class HomePage extends Component {
    // componentWillMount(){
    //     let { get_news, sportNews } = this.props;
    //     get_news()
    // }
    render(){
        let { get_news, sportNews } = this.props;
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <Link to="/users" type="button" className="btn btn-default navbar-btn users__nav-button">Users</Link>
                        <Link to="/news" type="button" className="btn btn-default navbar-btn">News</Link>
                    </div>
                </nav>
                <div className="container">
                    <button className="btn btn-default navbar-btn" onClick={()=> get_news()}>Get the latest sports news</button>
                    <div>
                        {sportNews.map(item => {
                            return(
                            <div key={item.url}>
                                <h1><a href={item.url} target="_blank">{item.title}</a></h1>
                                <img src={item.urlToImage} alt=""/>
                                <p>{item.description}</p>
                                <p>{item.publishedAt}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sportNews: state.sportNews
});

const mapDispatchToProps = dispatch => ({
    get_news: () => {
        dispatch(getSportNews())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);