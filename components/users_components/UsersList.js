import React, {Component} from 'react';
import { v4 } from 'node-uuid';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class UsersList extends Component{
    render(){
    let {users, deleteUsers} = this.props;
        return (
             <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>website</th>
                                <th>city</th>
                            </tr>
                        </thead>
                        <tbody className="table-hover">
                            {users.map(user => {
                                    return (
                                    <tr key={v4()}>
                                        <th>{user.name}</th>
                                        <th>{user.email}</th>
                                        <th>{user.phone}</th>
                                        <th>{user.website}</th>
                                        <th>{user.address.city}</th>
                                    </tr> 
                                    )
                            })}
                        </tbody>
                 </table>
                <Link  to="/" type="button" className="btn btn-info">Back</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        users: state.users
})

const mapDispatchToProps = dispatch => ({
        deleteUsers: () => {
            dispatch(deleteUsers)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
