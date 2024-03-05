
import { Route, Routes } from "react-router-dom";
//import AddUser from "./components/AddUser";
import CssBaseline from '@mui/material/CssBaseline';

import UserListView from "./views/UserListView";
import { Container } from "@mui/system";
// import Header from "./components/Common/Header";
// import Home from "./components/Layout/Home";
function App() {
  return (
    <Container maxWidth="sm" sx={{ m: 3 }}>
      <CssBaseline />

      {/* <Header /> */}
      <UserListView />
      {/* </header> */}
    </Container >
  );
}

export default App;