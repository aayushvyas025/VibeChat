import {
  DividerComponent,
  SearchbarComponent,
  SidebarUserComponent,
  ButtonComponent,
} from "../index";

function Sidebar() {
  return (
    <div>
      <SearchbarComponent />
      <DividerComponent styling={"divider px-3"} />
      <SidebarUserComponent />
      <DividerComponent styling={"divider px-3"} />
      <ButtonComponent />
    </div>
  );
}

export default Sidebar;
