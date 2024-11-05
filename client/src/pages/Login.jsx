import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { LogoResister, FormRow } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <LogoResister />
        <h4 className="text-xl">Login</h4>
        <FormRow type="email" name="email" defaultValue="koushik@gmail.com" />
        <FormRow type="password" name="password" defaultValue="1234" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
