/* eslint-disable react/prop-types */

import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
