import { Box, Stack, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rigthbar from "./components/Rigthbar";
import Sidebar from "./components/Sidebar";
import quotesServices from "./services/client_services/quotes-services";
import { theme } from './theme'

function App() {
  
  return (

    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Stack bgcolor="#f8fafc" direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rigthbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
