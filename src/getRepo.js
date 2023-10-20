import axios from "axios";

export default async function getSingleRepo(name){
    try {
        const response = await axios.get(
            `https://api.github.com/repos/shemigam1/${name}`
        );
        return (response.data);
    } catch (error) {
        console.error("Error fetching repo details:", error);
    }
}