import {MainPage} from './components/pages/mainPage'
import {EditPage} from './components/pages/editPage'
import {ViewPage} from './components/pages/viewPage'
import { SideBar } from './components/sidbar/sidebar';
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
        <Route path="/view-books" element={<ViewPage/>} />
        <Route path="/make-books" element={<EditPage/>} />
      </Routes>
    </Router>
    </>

  );
}


