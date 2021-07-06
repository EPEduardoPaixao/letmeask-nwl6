import Routes from "./routes";
// import {ThemeProvider} from 'styled-components';
import { AuthContextProvider } from "./contexts/AuthContext";
import ligth from "./styles/themes/ligth";
import dark from "./styles/themes/ligth";

import GlobalStyle from './styles/global'
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {

  return (
    <>
    <ThemeContextProvider>
      {/* <GlobalStyle/> */}
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeContextProvider>
    </>
  );
}

export default App;
