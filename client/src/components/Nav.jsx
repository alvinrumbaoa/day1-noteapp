import React from 'react'
import { Box , Text, Heading, Hide, Show} from '@chakra-ui/react'
import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<Box p={2} bg='gray.600' color='white' h="100vh" justify='center' w="20%"> 
			<Hide below='md'><Heading >Notes App</Heading></Hide>
			<Show above='sm'>Logo</Show>
			<Text mt={2} fontWeight="bold"><Link to="/">Home</Link></Text>
			<Text mt={2} fontWeight="bold"><Link to="/about">About</Link></Text>
			<Text mt={2} fontWeight="bold"><Link to="/new">Create a New Note</Link></Text>
		
		</Box>
	)
}

export default Nav
