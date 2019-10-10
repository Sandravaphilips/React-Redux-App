import React from "react";
import UserComponent from "./UserComponent";

export default function UsersComponent(props) {
    return (
        <div>
            {
                props.users.map(user =>
                    <UserComponent key={user.id} user={user} />
                )
            }
        </div>
    )
}