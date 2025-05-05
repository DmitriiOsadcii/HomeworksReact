import { useSelector } from "react-redux";

import { selectAllUsers } from "../../redux/user/user-selectors";

const UserList = () => {


    const item = useSelector(selectAllUsers)

    const elements = item.map(item => (<li key={item.name}>{item.name} {item.email}</li>))



    return (
        <div>
            <h1>User List</h1>
            <ol>
                {elements}
            </ol>
        </div>
    )
}

export default UserList;