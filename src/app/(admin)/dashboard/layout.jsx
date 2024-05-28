import NavbarAdmin from "@/component/AdminDashboard/NavbarAdmin";
import { SidebarAdmin } from "@/component/AdminDashboard/SidebarAdmin";

const Layout = ({ children }) => {
  return (
        <div>
          <div>
          <NavbarAdmin />
          </div>
          <div className="flex flex-1">
            <SidebarAdmin className="w-1/4" />
              {children}
          </div>
        </div>
  );
}

export default Layout;
