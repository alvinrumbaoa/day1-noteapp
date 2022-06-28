import React,{useState} from 'react'
import { Box , Heading, Button, Flex, Text}  from  '@chakra-ui/react'
import{ Link} from 'react-router-dom'
import { useClipboard } from '@chakra-ui/react'

const Home = (props) => {
	const [value, setValue] = useState("");
	const [message, setMessage] = useState("");
	const { hasCopied, onCopy } = useClipboard(value)




	return (
		<Box background="gray.100" p={10} w="100%">
			<Heading textAlign="center" p={10} >Welcome</Heading>
			<Flex justify="space-between">
			
			<Button colorScheme="blackAlpha"> <Link to="/create">Add New Note</Link></Button>
			</Flex>
	
			
		</Box>
	)
}

export default Home;
