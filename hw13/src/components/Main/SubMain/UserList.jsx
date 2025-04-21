import { useSelector, useDispatch } from "react-redux";
import UserItem from "./UserItem";
import { onSetUser } from "../../../redux/actionCreators";
import { people } from "../../../data";
import { useEffect } from "react";

const UserList = () => {
    const users = useSelector(store => store.users);
    const filter = useSelector(store => store.filter);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(onSetUser(people))
    }, [users, dispatch])


    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    const elements = filteredUsers.map(user => (
        <UserItem key={user.id} item={user} />
    ));


    return (
        <div>
            {elements.length > 0 ? elements : <p>No users found</p>}
        </div>
    );
};

export default UserList;