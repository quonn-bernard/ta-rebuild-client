import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const getCategories = async () => {
    const response = await axios.get(url)
    return response.data
}

