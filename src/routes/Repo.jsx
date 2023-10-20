import getSingleRepo from "../getRepo";
import { useLoaderData } from "react-router-dom";

export async function repoLoader({ params }) {
	const repo = await getSingleRepo(params.repoName);
	return { repo };
}

export function Repo() {
	const { repo } = useLoaderData();
	return (
		<div className="">
			<h3>{repo.name}</h3>
			<h6>Owner: {repo.owner.login}</h6>
			<a href={repo.html_url}>Github link</a>
			<p>Is repo private? {repo.private ? "True" : "False"}</p>
			<p>{repo.description}</p>
			<p>Main Language: {repo.language}</p>
			<p>Forks count {repo.forks}</p>
		</div>
	);
}
