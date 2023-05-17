import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import './index.css'
import ViewAllCourses from './Components/Courses/ViewAllCourses'

function App() {
  return (
      <Router>
          <Routes>
              <Route exact  path ="/" element={<Home/>} />
              <Route exact  path ="/courses" element={<ViewAllCourses/>} />
          </Routes>
      </Router>
  );
}

export default App;
