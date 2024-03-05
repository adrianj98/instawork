
import CssBaseline from '@mui/material/CssBaseline';

import UserListView from "./views/UserListView";
import { Container } from "@mui/system";

function App() {
  return (
    <Container maxWidth="sm" sx={{ m: 3 }}>
      <CssBaseline />
      <UserListView />
    </Container >
  );
}

export default App;