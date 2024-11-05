import { LogoResister, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, Link } from "react-router-dom";

export const action = async (data) => {
  console.log(data);
  return null;
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="POST" className="form">
        <LogoResister />
        <h4 className="text-xl">Register</h4>
        <div className="form-row">
          <FormRow type="text" name="name" />
          <FormRow type="text" name="lastName" labelText="last name" />
          <FormRow type="text" name="location" />
          <FormRow type="email" name="email" />

          <FormRow type="password" name="password" />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
