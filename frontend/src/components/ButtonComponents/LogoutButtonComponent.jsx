import React from "react";
import { BiLogOut } from "react-icons/bi";
import { ButtonComponent, IconComponent, SpinnerLoader } from "../index";
import { useLogout } from "../../hooks";

function LogoutButtonComponent() {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      <ButtonComponent
        btnIconSize={5}
        onClickHandler={logout}
        btnText={!loading ? <IconComponent icon={BiLogOut} iconSize={5} /> : <SpinnerLoader />}
      />
    </div>
  );
}

export default LogoutButtonComponent;
