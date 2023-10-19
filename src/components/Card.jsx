export default function Card({ name, id, url, date, lang }) {
	return (
		<div className="card">
			<a href={url} className="repo-name">
				{name}
			</a>
			{/* <p className="id">ID: {id}</p> */}

			{/* <p>Date created: {date}</p> */}
			<p className="lang">Main Language: {lang}</p>
		</div>
	);
}
