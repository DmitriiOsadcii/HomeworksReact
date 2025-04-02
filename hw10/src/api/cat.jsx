import axios from "axios";
const getCat = axios.create({ baseURL: 'https://api.thecatapi.com/v1/images/search' })

export const getCatImg = async () => {
    const { data } = await getCat.get('/')
    return (
        data
    )
}
