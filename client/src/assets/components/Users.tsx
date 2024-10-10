import React from 'react';
import type { UserData } from "../interfaces/UserData";

interface UserListProps {
    users: UserData[] | null; 
}

const UserList: React.FC<UserListProps> = ({ users }) => {

    if (!users || users.length === 0) {
        return <p>No users found.</p>;
    }

    return (
        <div className="user-list">
            <h2 className="pb-5">Check out all your friends!</h2>
            {users.map((user) => (
                <div className="row align-center mb-5" key={user.id}>
                    <div className="col-md-6">
                        <h3>{user.id}. {user.username}</h3>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;

