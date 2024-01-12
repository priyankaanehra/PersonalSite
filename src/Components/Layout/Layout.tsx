import { ReactNode } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const Layout = ({ children }: Props) => {
  return (
    <div className="mainlayout">
      <Header/>
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;