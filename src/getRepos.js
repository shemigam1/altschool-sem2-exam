import axios from 'axios'

export default async function getAllRepos() {
    try {
        const repoData = await axios.get(
            "https://api.github.com/users/shemigam1/repos?per_page=10"
        );
        const allRepos = repoData.data
        return allRepos
    } catch (error) {
        console.error("Error fetching data:", error);
    }
} 