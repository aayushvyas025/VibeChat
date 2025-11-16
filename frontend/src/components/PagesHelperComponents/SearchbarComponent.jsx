import { FormComponent, ButtonComponent } from "../index";
import { IoSearchSharp } from "react-icons/io5";

function SearchbarComponent() {
  return (
    <FormComponent styling={"flex items-center justify-between gap-2"}>
      <input
        type="text"
        className="input input-bordered rounded-full"
        placeholder="Search...."
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
