import { LogoResister, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
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

        <button type="submit" disabled={isSubmitting} className="btn btn-block">
          {isSubmitting ? "submitting..." : "submit"}
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
