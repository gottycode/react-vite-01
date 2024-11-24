import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: "64px" }}>
        <h1>Layout</h1>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
