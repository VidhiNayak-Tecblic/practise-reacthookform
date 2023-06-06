import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'

import YoutubeForm from "./Components/YoutubeForm";


function App() {
  return (
    <ChakraProvider>
     <YoutubeForm/>
    </ChakraProvider>
  );
}

export default App;
