import { useState } from "react";
import { FormComponent, ButtonComponent } from "../index";
import { IoSearchSharp } from "react-icons/io5";
import { useConversation } from "../../store";
import { useGetUsersForSidebar } from "../../hooks";
import {  searchingUser, toastMessages } from "../../helper";

function SearchbarComponent() {
  const [search, setSearch] = useState("");
  const {setSelectedUser} = useConversation();
   const {users} = useGetUsersForSidebar();
   const {errorToast} = toastMessages
  
  function formSubmitHandler(event) {
    event.preventDefault();
    if(!search.trim()) return; 
    if(search.length < 3) {
     return errorToast("Search Term must be at least 3 characters long")
    } 
    const user = searchingUser(users,search);

    if(user) {
      setSelectedUser(user);
    }else {
      errorToast("No Such User Found")
    }
    setSearch("")
 
  }

  return (
    <FormComponent styling={"flex items-center justify-between gap-2"} onSubmitHandler={formSubmitHandler}>
      <input
        type="text"
        className="input input-bordered rounded-full"
        placeholder="Search...."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <ButtonComponent
        btnType="submit"
        styling={"btn btn-circle bg-sky-500 text-white"}
        btnIcon={IoSearchSharp}
        btnIconSize={5}
        btnIconStyle={"outline-none"}
      />
    </FormComponent>
  );
}

export default SearchbarComponent;
