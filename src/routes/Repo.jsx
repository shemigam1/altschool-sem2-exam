import getSingleRepo from "../getRepo";
import { useLoaderData } from "react-router-dom";
import "../index.css";

export async function repoLoader({ params }) {
	const repo = await getSingleRepo(params.repoName);
	const dummyRepo = await getSingleRepo(undefined);
	return { repo, dummyRepo };
}

export function Repo() {
	const { repo } = useLoaderData();
	return (
		<div className="repo-data">
			<h1>{repo.name}</h1>
			<h3>Owner: {repo.owner.login}</h3>
			<a href={repo.html_url} target="_blank">
				Github link
			</a>
			<div className="row">
				<p>Is repo private?</p>
				<div className="data">{repo.private ? "True" : "False"}</div>
			</div>
			<div className="row">
				<p>Description</p>
				<div className="data">
					{repo.description || "No description for this repo"}
				</div>
			</div>
			<div className="row">
				<p>Main Language: </p>
				<div className="data">{repo.language || "To be determined"}</div>
			</div>
			<div className="row">
				<p>
					Forks count <span>{repo.forks}</span>
				</p>
			</div>
		</div>
	);
}

// export function ErrorRepo(){}
