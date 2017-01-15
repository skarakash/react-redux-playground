import React, { Component} from 'react';
import UsersList from './UsersList';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getUsers,deleteUsers } from '../../actions/usersActions';


class Users extends Component{
    render(){
        let { users } = this.props;
        if (users.length < 1){
            return (
                <div className="container">
                     <h1>Users page</h1>
                    <h1>Press GET USERS to get the list of users</h1>
                    <button type="button" className="btn btn-info get_users" onClick={() => this.props.get_users()}>Get users</button>
                    <Link  to="/" type="button" className="btn btn-info">Back</Link>
                </div>
            )
        }
        return (
            <div className="container">
                 <h1>Users page</h1>
                  <UsersList />
            </div>
           
        )
    }
};

const mapStateToProps = state => ({
       users: state.users
});

const mapDispatchToProps = dispatch => ({
        get_users: (request) => {
            dispatch(getUsers(request))
        },
        deleteUsers: () => {
            dispatch(deleteUsers())
        }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);