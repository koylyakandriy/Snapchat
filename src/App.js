import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import WebcamCapture from "./pages/WebcamCapture/WebcamCapture";
import Preview from "./pages/Preview/Preview";
import Chats from "./pages/Chats/Chats";
import ChatView from "./pages/ChatView/ChatView";
import { login, logout, selectUser } from "./features/appSlice";
import "./App.css";
import Login from "./pages/Login/Login";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { displayName, photoURL, uid } = authUser;

        dispatch(
          login({
            username: displayName,
            profilePic: photoURL,
            id: uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
              alt=""
            />
            <div className="add__body">
              <div className="app__bodyBackground">
                <Switch>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                  <Route exact path="/preview">
                    <Preview />
                  </Route>
                  <Route exact path="/chats">
                    <Chats />
                  </Route>
                  <Route exact path="/chats/view">
                    <ChatView />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
