import "./Header.scss";

import {
	Menu,
	MenuButton,
	IconButton,
	MenuList,
	MenuItem,
	Text,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<div className="header">
				<Link to="/">
					<Text
						className="header__logo"
						bgGradient="linear(to-l, #63B3ED, #ADB6FF)"
						bgClip="text"
						fontSize="6l"
						fontWeight="extrabold"
					>
						Healthsimple
					</Text>
				</Link>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label="Options"
						icon={<HamburgerIcon boxSize={8} />}
						variant="unstyled"
						color={"blue.100"}
						// size={"lg"}
					/>
					<MenuList>
						<MenuItem
							fontSize={"sm"}
							background={"none"}
							justifyContent="flex-end"
							borderBottomWidth="3px"
							borderBottomStyle={"solid"}
							borderBottomColor={"blue.100"}
						>
							About Us
						</MenuItem>
						<MenuItem
							fontSize={"sm"}
							justifyContent="flex-end"
							borderBottomWidth="3px"
							borderBottomStyle={"solid"}
							borderBottomColor={"blue.100"}
						>
							How It Works
						</MenuItem>
						<MenuItem fontSize={"sm"} justifyContent="flex-end">
							<Link to="/my-account">Login</Link>
						</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</>
	);
}

export default Header;
