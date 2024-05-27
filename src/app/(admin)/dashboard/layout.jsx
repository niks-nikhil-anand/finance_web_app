import NavbarAdmin from "@/component/AdminDashboard/NavbarAdmin";
import { SidebarAdmin } from "@/component/AdminDashboard/SidebarAdmin";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <NavbarAdmin />
          <div className="flex flex-1">
            <SidebarAdmin className="w-1/4" />
            <main className="flex-1 p-4">
              {children}
            </main>
          </div>
      </body>
    </html>
  );
}
