import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import { Repo, repoLoader } from "./routes/Repo";
import ErrorPage from "./error-page";
import "./index.css";
import NotFound from "./404";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		children: [
			{
				path: "repos/:repoName",
				element: <Repo />,
				loader: repoLoader,
			},
			{
				path: "/error-boundary-test",
				element: <ErrorPage />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
