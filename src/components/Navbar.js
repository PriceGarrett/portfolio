import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <NavItem label={"Home"} route={"/"}/>
      <div className="navbar-other">
        <NavItem label={"Blog"} route={"/blog"}/>
        <NavItem label={"Projects"} route={"/projects"}/>
      </div>
    </div>
  );
}
