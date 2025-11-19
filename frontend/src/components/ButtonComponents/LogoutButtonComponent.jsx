import React from "react";
import { BiLogOut } from "react-icons/bi";
import { ButtonComponent,IconComponent,SpinnerLoader } from "../index";
import { useLogout } from "../../hooks";

function LogoutButtonComponent() {
  const { loading, logoutApi } = useLogout();

  return (
    <div className="mt-auto">
      <ButtonComponent btnType="button" onClickHandler={logoutApi}>
        {!loading ? (
          <IconComponent icon={BiLogOut} iconSize={5} />
        ): (
          <SpinnerLoader />
        )}
      </ButtonComponent>
    </div>
  );
}

export default LogoutButtonComponent;
