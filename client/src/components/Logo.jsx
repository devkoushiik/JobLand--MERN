import logo from "../../public/favicon.ico";
const Logo = () => {
  return (
    <nav className="flex justify-between">
      <img src={logo} alt="jobland" className="logo" />
    </nav>
  );
};
export default Logo;
