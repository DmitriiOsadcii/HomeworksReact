import { useDispatch, useSelector } from "react-redux";
import { onSetFilter, onSetUser } from "../../../redux/actionCreators";


const Filter = () => {

    const allUsers = useSelector(store => store.users);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (e.key === "Enter") e.preventDefault()
        const value = e.target.value;
        dispatch(onSetFilter(value))
        const filtered = value ? allUsers.filter(user =>
            user.name.toLowerCase().includes(value.toLowerCase())
        ) : allUsers;

        dispatch(onSetUser(filtered))
    }

    return (
        <form onChange={handleChange}>
            <input type="text" placeholder="Text an User" onKeyDown={(e) => {
                if (e.key === "Enter") e.preventDefault();
            }} />
        </form>
    )
}
export default Filter;