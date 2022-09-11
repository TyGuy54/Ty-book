import {MainPage} from './components/pages/mainPage'
import {EditPage} from './components/pages/editPage'
import { SideBar } from './components/sidbar/sidbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
    <Router>
      <div className="flex flex-col items-center justify-center">
          <SideBar/>
      </div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/books" element={<EditPage/>} />
      </Routes>
    </Router>
    </>

  );
}


