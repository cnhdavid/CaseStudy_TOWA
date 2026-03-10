import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default Layout;
