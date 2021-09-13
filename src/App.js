import {Switch, Route} from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

import './default.scss';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';



function App() {
  return (
    <div className="App">

        <Switch>
        <Route exact path="/" render={()=>(
          <HomepageLayout>
            <Homepage/>
          </HomepageLayout> 
          )}/>
        <Route path="/registration" render={()=>(
          <MainLayout>
            <Registration/>
          </MainLayout>
        )}/>
        </Switch>

    </div>
  );
}

export default App;
