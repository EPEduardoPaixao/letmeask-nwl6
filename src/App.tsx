import Routes from "./routes";
import {ThemeProvider} from 'styled-components';
import { AuthContextProvider } from "./contexts/AuthContext";
import ligth from "./styles/themes/ligth";
import dark from "./styles/themes/ligth";

import GlobalStyle from './styles/global'

function App() {

  return (
    <>
    <ThemeProvider theme={ligth}>
      <GlobalStyle/>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
