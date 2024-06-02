import { FooterUser } from "@/component/User/FooterUser";
import NavbarUser from "@/component/User/NavbarUser";

const Layout = ({ children }) => {
  return (
        <div>
         
          <NavbarUser />
          {children}
          <FooterUser/>
        </div>
  );
}

export default Layout;
