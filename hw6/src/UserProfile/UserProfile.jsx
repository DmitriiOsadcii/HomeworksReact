import { useState, useEffect } from 'react';
import axios from 'axios';


const UserProfile = () => {
    const [stateUser, setStateUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                setStateUser({});
                const { data } = await axios.get("https://randomuser.me/api");
                const userData = data.results[0];
                setStateUser({
                    name: `${userData.name.first} ${userData.name.last}`,
                    picture: userData.picture.medium,
                    email: userData.email,
                    phone: userData.phone,
                });

            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    const showNextUser = async () => {
        try {
            setLoading(true);
            setStateUser({});
            const { data } = await axios.get("https://randomuser.me/api");
            const userData = data.results[0];
            setStateUser({
                name: `${userData.name.first} ${userData.name.last}`,
                picture: userData.picture.medium,
                email: userData.email,
                phone: userData.phone,
            });

        }
        catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <div>
            <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {loading && <p>Список дел загружается</p>}
            </div>
            <div>
                <img src={stateUser.picture} alt="User" />
            </div>
            <div>
                <p>{stateUser.name}</p>
                <p>Email: {stateUser.email}</p>
                <p>Phone: {stateUser.phone}</p>
            </div>
            <button onClick={showNextUser}>Show next User</button>
        </div>
    )
}
export default UserProfile;