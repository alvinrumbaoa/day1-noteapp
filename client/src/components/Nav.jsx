import React from 'react'
import { Box , Text, Heading, Hide} from '@chakra-ui/react'
import {Link, Outlet} from 'react-router-dom';
const Nav = () => {
	return (
		<Box p={2} bg='gray.600' color='white'  justify='center' w="20%"> 
			<Hide below='md'><Heading >Notes App</Heading></Hide>

			<Text mt={2} fontWeight="bold"><Link to="/">Home</Link></Text>
			<Text mt={2} fontWeight="bold"><Link to="/about">About</Link></Text>
			<Text mt={2} fontWeight="bold"><Link to="/notes/create">Create a New Note</Link></Text>
			<Outlet />


		</Box>
	
	)
}

export default Nav
