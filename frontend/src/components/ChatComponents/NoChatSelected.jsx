import { TiMessage } from "react-icons/ti"
import {IconComponent} from "../index"

function NoChatSelected({username}) {
  return (
    <div className='md:min-w-[450px] flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
            <p>Welcome 👋 {username} ❄</p>
            <p>Select a chat to start messaging</p>
            <IconComponent icon={TiMessage} styling={"text-3xl md:text-6xl text-center"} />
        </div>

    </div>
  )
}

export default NoChatSelected