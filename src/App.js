import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import './index.css'
import SignUp from '../src/Components/SignUp/SignUp'
import ViewAllCourses from './Components/Courses/ViewAllCourses'

//import { createMuiTheme ,ThemeProvider } from '@mui/material;



function App() {
  return (

      <Router>
          <Routes>
              <Route exact  path ="/" element={<Home/>} />
              <Route exact  path ="/courses" element={<ViewAllCourses/>} />
              <Route exact  path ="/signup" element={<SignUp/>} />
          </Routes>
      </Router>

  );
}

export default App;
