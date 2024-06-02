import 'tailwindcss/tailwind.css';
import '@/app/globals.css';
import NavbarAdmin from "@/component/AdminDashboard/NavbarAdmin";
import { SidebarAdmin } from "@/component/AdminDashboard/SidebarAdmin";

const Layout = ({ children }) => {
  return (
        <div>
          <div>
          <NavbarAdmin />
          </div>
          <div className="flex bg-gray-100">
            <SidebarAdmin className="w-1/4" />
              {children}
          </div>
        </div>
  );
}

export default Layout;
