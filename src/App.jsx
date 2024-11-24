import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/layouts/Layout";
import HomePage from "./components/pages/home/HomePage";
import SettingPage from "./components/pages/setting/SettingPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path={"/home"} element={<HomePage />} />
            <Route path={"/setting"} element={<SettingPage />} />
            <Route path={"/grid"} element={<SettingPage />} />
            <Route path={"/table"} element={<SettingPage />} />
            <Route path={"/datagrid"} element={<SettingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
