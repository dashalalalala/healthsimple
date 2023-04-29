import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme.js";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<div className="App">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
		</ChakraProvider>
	);
}

export default App;
