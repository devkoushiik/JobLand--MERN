import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
const LandingPageInfo = () => {
  return (
    <div className="container page md:flex-1 md:justify-center md:items-center">
      {/* info */}
      <div className="info mt-12 md:mt-0">
        <h1>
          job <span>hunting</span> app
        </h1>
        <p>
          Land your dream job with ease! Our job searching web app connects you
          with top companies and opportunities in your field. With a
          user-friendly interface and advanced filtering options, you can
          quickly find and apply to jobs that match your skills and interests.
          Plus, get personalized job recommendations and expert advice to help
          you stand out in a competitive market. Start your job search today and
          take the first step towards a brighter career!
        </p>
        <Link to="/register" className="btn register-link">
          Register
        </Link>
        <Link to="/login" className="btn">
          Login / Demo User
        </Link>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </div>
  );
};
export default LandingPageInfo;
