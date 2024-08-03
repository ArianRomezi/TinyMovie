import Header from "./Header";
import Footer from "./Footer";
import styles from "@/layout/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
