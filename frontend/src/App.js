import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./index.css";
import SignUp from "../src/Components/SignUp/SignUp";
import Login from "../src/Components/SignUp/Login";
import CoursesPageUIUX from "../src/Components/CoursesPageALL/UIUX/CoursesPageUIUX";
import CoursesPageDjango from "../src/Components/CoursesPageALL/Django/CoursesPageDjango";
import CoursesPageFE from "../src/Components/CoursesPageALL/Frontend/CoursesPageFE";
import DashBoard from "../src/Components/DashBoard/DashBoard";
import MyCourses from "../src/Components/DashBoard/MyCourses";
import MyCertificate from "../src/Components/DashBoard/MyCertificate";
import MyNotification from "../src/Components/DashBoard/MyNotification";
import LandingPage from "../src/Components/LAndingPage/LandingPage";
import PasswordReset from "../src/Components/SignUp/PasswordReset";
import CreatePassword from "../src/Components/SignUp/CreatePassword"
import PrivacyPage from "./Components/PolicyPage/PrivacyPage";
import TermsAndConditionPage from "./Components/PolicyPage/TermsAndConditionPage";



function App() {
    const checkLocalStorage = localStorage.getItem("ent");
    const isAuthenticated = checkLocalStorage === null || checkLocalStorage === "";

    return (
        <Router>
            <Routes>
                <Route exact path="/LandingPage" element={<LandingPage />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/tncpage" element={<TermsAndConditionPage />} />
                <Route exact path="/privacypage" element={<PrivacyPage />} />
                <Route exact path="/passwordreset" element={<PasswordReset />} />
                <Route
                    exact
                    path="/createpassword/:uidb64/:token"
                    element={<CreatePassword />}
                />
                <Route
                    exact
                    path="/coursespageuiux"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Login" replace />
                        ) : (
                            <CoursesPageUIUX />
                        )
                    }
                />
                <Route
                    exact
                    path="/coursespagedjango"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Login" replace />
                        ) : (
                            <CoursesPageDjango />
                        )
                    }
                />
                <Route
                    exact
                    path="/coursespagefe"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Login" replace />
                        ) : (
                            <CoursesPageFE />
                        )
                    }
                />
                <Route
                    exact
                    path="/dashboard"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Login" replace />
                        ) : (
                            <DashBoard />
                        )
                    }
                />
                <Route
                    exact
                    path="/mycourses"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Login" replace />
                        ) : (
                            <MyCourses />
                        )
                    }
                />
                <Route
                    exact
                    path="/mycerti"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Login" replace />
                        ) : (
                            <MyCertificate />
                        )
                    }
                />
                <Route
                    exact
                    path="/mynoti"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Login" replace />
                        ) : (
                            <MyNotification />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
