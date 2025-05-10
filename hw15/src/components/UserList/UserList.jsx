const UserList = ({ users }) => {
    const elements = users.map(item => <p key={item.id} >{item.name}</p>)
    return (
        <div>{elements}</div>
    )
}
export default UserList;