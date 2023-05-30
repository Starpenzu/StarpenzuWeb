import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import './index.css'
import SignUp from '../src/Components/SignUp/SignUp'
import ViewAllCourses from './Components/Courses/ViewAllCourses'
import Login from '../src/Components/SignUp/Login'
import MyForm from '../src/Components/OutlinedInput/MyForm'
import CoursesPage from '../src/Components/CoursesPage/CoursesPage'



function App() {
  return (

      <Router>
          <Routes>
              <Route exact  path ="/" element={<Home/>} />
              <Route exact  path ="/courses" element={<ViewAllCourses/>} />
              <Route exact  path ="/signup" element={<SignUp/>} />
              <Route exact  path ="/Login" element={<Login/>} />
              <Route exact  path ="/form" element={<MyForm/>} />
              <Route exact  path ="/coursespage" element={<CoursesPage/>} />
          </Routes>
      </Router>

  );
}

export default App;
