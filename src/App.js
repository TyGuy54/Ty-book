import {MainPage} from './components/pages/mainPage'
import {SideBar} from './components/sidbar/sidbar'

export const App = () => {
  return (
    <>
      <MainPage/>
        <div className="flex flex-col items-center justify-center">
          <SideBar/>
        </div>
    </>

  );
}


