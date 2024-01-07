import { Link } from "react-router-dom";
import "./_ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error__page">
      <p>Error! Page not found.</p>
      {/* redirect to homepage if path not found */}
      <p>
        Return to the <Link to="/">Home</Link> page
      </p>
    </div>
  );
};

export default ErrorPage;
