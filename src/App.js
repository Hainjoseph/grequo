import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./component/auth/Login";
import Ev from "./component/Ev";
import { selectUser } from "./features/userSlice";
import { login, logout, } from "./features/userSlice";
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser)
   const dispatch = useDispatch();

   useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         dispatch(
           login({
             uid: authUser.uid,
             email: authUser.email,
             displayName: authUser.displayName,
             photo: authUser.photoURL,
           })
         );
          console.log(authUser);
       } else {
         dispatch(logout());
       }
     });
   }, [dispatch]);

  return <div className="App">{user ? <Ev /> : <Login />}</div>;
}

export default App;
