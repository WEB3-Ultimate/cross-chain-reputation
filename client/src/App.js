import { ChakraProvider, theme } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <HashRouter>
                <Routes>
                    <Route 
                        path="/" 
                        element={<Layout/>}
                    />
                </Routes>
            </HashRouter>
        </ChakraProvider>
    );
}

export default App;