import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import {ButtonComponent} from "../index"

function LogoutButtonComponent() {
  return (
     <div className="mt-auto">
        <ButtonComponent btnIcon={BiLogOut} btnIconSize={5} />
      </div>
  )
}

export default LogoutButtonComponent