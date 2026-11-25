import { useNavigate } from "react-router";

function LogoutButton() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/", { replace: true });
  }

  return (
    <button className="btn btn-ghost text-base justify-start" onClick={logout}>
      Log out
    </button>
  );
}

export default LogoutButton;
