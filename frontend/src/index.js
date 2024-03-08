import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Helmet, HelmetProvider} from "react-helmet-async";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HelmetProvider>
          <Helmet>
              <title>Home Page</title>
              <meta
                  name='description'
                  content='Unlock your potential with our programming courses. From beginner to advanced levels, master the art of programming with our expert-led courses.'
              />
              <meta property="og:title" content="Starpenzu" />

              <meta name="keywords" content="Programming, CodingCourses, TechEducation" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://yourwebsite.com" />
              <meta property="og:image" content="https://example.com/image.jpg" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Your Website Title" />
              <meta
                  name="twitter:description"
                  content="Embark on a coding journey with our premier programming courses! From Python to JavaScript, level up your skills with expert-led tutorials and hands-on projects."
              />
              <meta name="twitter:image" content="https://example.com/image.jpg" />
              <meta name="twitter:site" content="@yourtwitterhandle" />
              <meta
                  property="og:description"
                  content="Embark on a coding journey with our premier programming courses! From Python to JavaScript, level up your skills with expert-led tutorials and hands-on projects."
              />

          </Helmet>
          <App />
      </HelmetProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
