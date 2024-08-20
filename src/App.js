import React, { useState, useEffect } from "react";
import {
  Route,
  Router,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Layout from "./layout";
import Gmail from "./comp/Gmail";
import Docs from "./comp/Docs";
import SSTrack from "./comp/SS-track";
import Verdebooks from "./comp/Verdebooks";
import ClickHR from "./comp/ClickHR";
import CalendarComponent from "./comp/GoogleCalender";
import Caiif from "./comp/Caiif";
import Campaigns from "./comp/Campaigns";
import Deals from "./comp/Deals";
import Header from "./website/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'animate.css/animate.min.css';
// import 'lineicons/dist/LineIcons.css'; // Adjusted import path
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS here
import SignUpForm from "./website/SignUp";
import Login from "./website/Login";
import ProtectedRoute from "./ProtectedRoute";
import { UserProvider } from "./website/UserContext";
import { GmailApiProvider } from "./context/GmailApiProvider";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);

  return (
    <div>
      <>
        {/* <UserProvider> */}
        <Routes>
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Gmail />} />
            <Route
              path="/:token"
              element={
                <GmailApiProvider>
                  <Gmail />
                </GmailApiProvider>
              }
            />
            <Route path="/deals" element={<Deals />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/sstrack" element={<SSTrack />} />
            <Route path="/verdebooks" element={<Verdebooks />} />
            <Route path="/clickHr" element={<ClickHR />} />
            <Route path="/calender" element={<CalendarComponent />} />
            <Route path="/caiif" element={<Caiif />} />
            <Route path="/campaigns" element={<Campaigns />} />
            {/* </Route> */}
          </Route>
          <Route path="/header" element={<Header />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* </UserProvider> */}
      </>
    </div>
  );
};

export default App;
