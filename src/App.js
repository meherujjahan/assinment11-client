import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import DetailService from './Components/DetailService/DetailService'
import MyOrder from './Components/MyOrder/MyOrder';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import AddedService from './Components/AddedService/AddedService'


function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute exact path='/services/:_id'>
            <DetailService></DetailService>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path='/myorder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route exact path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='/Allorder'>
            <ManageOrder></ManageOrder>
          </Route>
          <Route exact path='/addservice'>
            <AddedService></AddedService>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>

  </div>
  );
}

export default App;
