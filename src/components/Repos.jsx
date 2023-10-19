import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Repos() {
	const [repoArr, setRepoArr] = useState([]);
	useEffect(() => {
		async function repoData() {
			const repoData = await axios.get(
				"https://api.github.com/users/shemigam1/repos?per_page=10"
			);
			setRepoArr(repoData.data);
			// console.log(data.data);
		}
		repoData();
		console.log(repoArr);
	}, []);

	return (
		<div className="repos">
			{repoArr.map((repo) => (
				<Card
					key={repo.node_id}
					name={repo.name}
					id={repo.node_id}
					url={repo.html_url}
					// date={repo.created_at}
					lang={repo.language}
				/>
			))}
		</div>
	);
}
