import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./Pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Contact from "./Pages/Contact";
import NotFoundPage from "./Pages/NotFoundPage";  

const App = () => {
  
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
      <>
      <AuthProvider>
      <Router>
        < Navbar />
        <LoadingBar height = {3} color="#f11946" progress={progress} />
        <Routes>
        <Route
              path="/newshunt/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country={"us"}
                  category={"general"}
                />
              }
              />
        <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country={"us"}
                  category={"technology"}
                />
              }
              />
        <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={"us"}
                category={"business"}
              />
            }
            />   
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country={"us"}
                  category={"entertainment"}
                />
              }
              />
              <Route
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country={"us"}
                  category={"general"}
                />
              }
              />
              <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country={"us"}
                  category={"health"}
                />
              }
              />
              <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country={"us"}
                  category={"science"}
                />
              }
              />
              <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country={"us"}
                  category={"sports"}
                />
              }
              />
              <Route path='/contact' element = {< Contact/>} />  
              <Route path='/login' element = {< Login/>} /> 
              <Route path='*' element = {< NotFoundPage/>} />
        </Routes>
        <ScrollToTop />
        </Router>
        </AuthProvider>
      </>
  );
}

export default App;