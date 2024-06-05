import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page" className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"} className="btn">Go Home</Link>
    </div>
  )
}

export default ErrorPage;