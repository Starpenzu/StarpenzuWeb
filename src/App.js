import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import './index.css'
import SignUp from '../src/Components/SignUp/SignUp'
import ViewAllCourses from './Components/Courses/ViewAllCourses'
import Login from '../src/Components/SignUp/Login'
import MyForm from '../src/Components/OutlinedInput/MyForm'
import CoursesPageUIUX from  '../src/Components/CoursesPageALL/UIUX/CoursesPageUIUX';
import CoursesPageDjango from '../src/Components/CoursesPageALL/Django/CoursesPageDjango';
import CoursesPageFE from '../src/Components/CoursesPageALL/Frontend/CoursesPageFE'



function App() {
  return (

      <Router>
          <Routes>
              <Route exact  path ="/" element={<Home/>} />
              {/*<Route exact  path ="/courses" element={<ViewAllCourses/>} />*/}
              <Route exact  path ="/signup" element={<SignUp/>} />
              <Route exact  path ="/Login" element={<Login/>} />
              <Route exact  path ="/form" element={<MyForm/>} />
              <Route exact  path ="/coursespageuiux" element={<CoursesPageUIUX/>} />
              <Route exact  path ="/coursespagedjango" element={<CoursesPageDjango/>} />
              <Route exact  path ="/coursespagefe" element={<CoursesPageFE/>} />
          </Routes>
      </Router>

  );
}

export default App;
