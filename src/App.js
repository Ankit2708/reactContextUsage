import React, {useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/Auth-Context';
// import AuthContext from './store/Auth-Context';
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  //   if (storedUserLoggedInInformation === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  // return (
  //     <AuthContext.Provider 
  //     value={
  //       {isLoggedIn:isLoggedIn,
  //       onLogout:logoutHandler}}>
  //       {/* below line commented because we are now passing context not props */}
  //     {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
  //     {/* function can also be passed in auth context */}
  //     {/* <MainHeader onLogout={logoutHandler} /> */}
  //     <MainHeader />
  //     <main>
  //       {!isLoggedIn && <Login onLogin={loginHandler} />}
  //       {isLoggedIn && <Home onLogout={logoutHandler} />}
  //     </main>
  //     </AuthContext.Provider>
  // );
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  )
}

export default App;
