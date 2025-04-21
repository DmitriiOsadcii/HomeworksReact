import { useSelector } from "react-redux";

const User = () => {
    const username = useSelector(store => store.username);
    const status = useSelector(store => store.status);

    return (
        <>
            <div>
                <h1>User Profile</h1>
                <h3>User Information</h3>
                <p>Name: {username}</p>
                <p>Status: {status}</p>
            </div>
        </>
    )
}
export default User;