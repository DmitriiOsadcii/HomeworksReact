import { Route, Routes } from "react-router-dom";

import MainPage from "../src/pages/MainPage/MainPage.jsx";
import PostListPage from "./pages/PostListPage/PostListPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage.jsx";


const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/articles" element={<PostListPage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
    )
}

export default Navigation;