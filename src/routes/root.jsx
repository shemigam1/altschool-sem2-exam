import { Outlet, Link, useLoaderData } from "react-router-dom";
import getAllRepos from "../getRepos";
// import { useEffect } from "react";

// export async function loader() {
// 	const contacts = await getContacts();
// 	return { contacts };
// }
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
				<div>
					{/* <form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search contacts"
							placeholder="Search"
							type="search"
							name="q"
						/>
						<div id="search-spinner" aria-hidden hidden={true} />
						<div className="sr-only" aria-live="polite"></div>
					</form>
					<form method="post">
						<button type="submit">New</button>
					</form> */}
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
