import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import {ButtonComponent} from "../index"
import { useLogout } from '../../hooks'

function LogoutButtonComponent() {
    const {loading , logout} = useLogout();

  return (
     <div className="mt-auto">
        <ButtonComponent btnIcon={ !loading && BiLogOut } btnIconSize={5} onClickHandler={logout} />
      </div>
  )
}

export default LogoutButtonComponent