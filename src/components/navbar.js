import React, {useState} from "react";
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';


const nav = [
	{name:'Home',link:"/"},
	{name:'Wide',link:"/wide"},
]


function navbar(){

	return (
	
		<Nav class='nav_container'>
			<NavMenu>
			{nav.map(navItem => ( // Renamed 'nav' to 'navItem' for clarity
				<>
				{/* Apply the 'end' prop to the NavLink for the home page */}
				<NavLink to={navItem.link} key={navItem.name} end={navItem.link === '/'}>
					{navItem.name}
				</NavLink>
					{ navItem.submenu !== undefined ? // Changed 'nav.submenu' to 'navItem.submenu'
						<ul>
						{navItem.submenu.map((submenu) => ( // Changed 'nav.submenu' to 'navItem.submenu'
							<NavLink to={submenu.link} activeStyle>
							{submenu.name}
							</NavLink>
						))}
						</ul> : null
					}
				</>	
			))}
			</NavMenu>
		</Nav>
	);
}

	export default navbar
