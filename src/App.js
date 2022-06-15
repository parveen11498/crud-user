import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Homee";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { useState } from "react";
import NavBar from "./components/NavBar";

const users = [
  {
    name: "Mr. khan Akbar",
    email: "abdul123@gmail.com",
    pic: "http://placeimg.com/480/480/people",
    id: "1",
  },
  {
    name: "MS. Neha Naik",
    email: "neha130@gmail.com",
    pic: "http://placeimg.com/480/480/people",
    id: "2",
  },
  {
    name: "Mr. Ricky Fernandes",
    email: "ricky123@hotmail.com",
    pic: "http://placeimg.com/480/480/people",
    id: "3",
  },
  {
    name: "ms. ananda gudamani",
    email: "ananda123@hotmail.com",
    pic: "http://placeimg.com/480/480/people",
    id: "4",
  },
  {
    name: "ms. anjali thappa",
    email: "najali123@hotmail.com",
    pic: "http://placeimg.com/480/480/people",
    id: "5",
  },
];

function App() {
  const [userList, setUserList] = useState(users);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <>
          <Route path="/"  element={<Home 
              users={userList}
              userList={userList}
              setUserList={setUserList}
            />} >
         
            
          </Route>
          <Route path="/adduser" element={<AddUser userList={userList} setUserList={setUserList} />}>
         
          </Route>
          <Route path="/edit/:id" element={ <EditUser userList={userList} setUserList={setUserList} />}>
           
          </Route>
          <Route path="/profile/:id" element={<Profile userList={userList} />}>
            
          </Route>
          <Route path="/editprofile/:id" element={ <EditProfile userList={userList} setUserList={setUserList} />}>
           
          </Route>
          <Route path="**" exact element={<h2>404</h2>}>
            
          </Route>
          </>
        </Routes>
      </div>
    </div>
  );
}

export default App;