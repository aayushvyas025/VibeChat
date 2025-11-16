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
      <DividerComponent />
      <SidebarUserComponent />
      <DividerComponent />
      <ButtonComponent />
    </div>
  );
}

export default Sidebar;
