import UserList from "../UserList/UserList"
import { userList } from '../../users'
import { useState, useMemo, useCallback } from "react"


function App() {
  const [filter, setFilter] = useState('')

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const filterUsers = useCallback((users, query) => {
    return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
  }, [])


  const filteredUsers = useMemo(() => {
    return filterUsers(userList, filter)
  }, [filter, filterUsers])

  return (
    <>
      <input type="text" placeholder="Select name" onChange={handleFilterChange} value={filter} />
      <UserList users={filteredUsers} />
    </>
  )
}

export default App
