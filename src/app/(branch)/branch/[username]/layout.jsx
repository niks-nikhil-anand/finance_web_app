import NavbarBranch from "@/component/Branch/NavbarBranch";
import { SidebarBranch } from "@/component/Branch/SidebarBranch";



const Layout = ({ children }) => {
  return (
        <div>
          <div>
          <NavbarBranch />
          </div>
          <div className="flex bg-gray-100">
            <SidebarBranch className="w-1/4" />
              {children}
          </div>
        </div>
  );
}

export default Layout;
