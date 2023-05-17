import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import HabitInfo from "./components/HabitInfo/HabitInfo";
import NotFound from "./components/NotFound/NotFound";
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
						<Route path="/my-account/:userId/habits" element={<User />} />
						<Route
							path="/my-account/:userId/habits/:habitId"
							element={<HabitInfo />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</div>
		</ChakraProvider>
	);
}

export default App;
