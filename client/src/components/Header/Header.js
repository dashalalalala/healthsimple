import "./Header.scss";

import {
	Menu,
	MenuButton,
	IconButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function Header() {
	return (
		<>
			<div className="header">
				<h1 className="header__logo" >Healthsimple</h1>
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
							Login
						</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</>
	);
}

export default Header;
