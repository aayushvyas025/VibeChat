import {
  DividerComponent,
  SearchbarComponent,
  SidebarUserComponent,
  LogoutButtonComponent,
} from "../index";


function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchbarComponent />
      <DividerComponent styling={"divider px-3"} />
      <SidebarUserComponent />
      <DividerComponent styling={"divider px-3"} />
      <LogoutButtonComponent />
    </div>
  );
}

export default Sidebar;
