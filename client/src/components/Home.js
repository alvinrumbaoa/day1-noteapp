import React,{useState, useEffect} from 'react'
import { Box , Heading, Input, Button, Flex, Text}  from  '@chakra-ui/react'
import{ Link} from 'react-router-dom'
import {axios} from 'axios'

const Home = (props) => {

	const [notes, setNotes] = useState("");

	useEffect(() => {
		axios.get("http://localhost:8000/api/notes")
		.then((res) =>{
				console.log(res.data);  
				setNotes(res.data);  
			
		})
		.catch(err => { 
			console.log(err.response);
		})       
},[])


	return (
		<Box background="gray.100" p={10} w="100%">
			<Heading textAlign="center" p={10} >Welcome</Heading>
			<Input></Input>
			<Flex justify="space-between">
			{
				notes.map((getNotes, index) =>(
					<Box key={index}>
								<Text>{getNotes.messages}</Text>
								<Button>Edit</Button>
								<Button>Delete</Button>
					</Box>	
				
				))
			}
			<Button colorScheme="blackAlpha"> <Link to="/create">Add New Note</Link></Button>
			</Flex>
	
			
		</Box>
	)
}

export default Home;
