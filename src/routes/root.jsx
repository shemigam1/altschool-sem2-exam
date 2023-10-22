import { Outlet, Link, useLoaderData } from "react-router-dom";
import getAllRepos from "../getRepos";
import darkMode from "../darkMode";

export async function loader() {
	const repos = await getAllRepos();
	return { repos };
}
export default function Root() {
	const { repos } = useLoaderData();

	return (
		<>
			<div id="sidebar">
				<h1>Semilore's github repos</h1>
				<div className="theme__wrapper">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="2em"
						viewBox="0 0 512 512"
						id="theme-toggle"
						onClick={() => darkMode()}
					>
						<path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
					</svg>
					<Link className="error" to={`repos/fakerepo`}>
						Error boundary test
					</Link>
				</div>
				<nav>
					{repos.length ? (
						<ul>
							{repos.map((repo) => (
								<li key={repo.id}>
									<Link to={`repos/${repo.name}`}>
										{repo.name ? <>{repo.name}</> : <i>No Name</i>}{" "}
									</Link>
								</li>
							))}
							<li key={100}>
								<Link to={`fakerepo`}>Fake Repo to test 404</Link>
							</li>
						</ul>
					) : (
						<p>
							<i>No Repos</i>
						</p>
					)}
				</nav>
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}
