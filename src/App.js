import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import YoutubeForm from "./Components/YoutubeForm";
import YoutubeFormYup from "./Components/YoutubeFormYup";

function App() {
  return (
    <ChakraProvider>
      <YoutubeForm />
      <YoutubeFormYup />
    </ChakraProvider>
  );
}

export default App;
