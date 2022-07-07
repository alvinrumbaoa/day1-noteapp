import React,{useState, useEffect} from 'react'
import axios from 'axios'
import{ Link} from 'react-router-dom'
import {Box, Text, Button , GridItem} from '@chakra-ui/react'

const Notes = (props) => {

	const [id, setID] = useState("");
	const [message, setMessage] = useState("");
	const [creator, setCreator] = useState("");

	useEffect (() =>{
		axios.get('http://localhost:8000/api/notes/' + props.id)
	
		.then((res) =>{
			let noteDb = res.data;
			setID(noteDb._id);
			setMessage(noteDb.message);
			setCreator(noteDb.creator);

		})
		.catch((err) =>{
			console.log(err);
		})
	}, [props.id])
	return (
			<Box  p={10} m={2}  justify="center" h='200px' boxShadow=" 2px 5px 10px black" borderRadius={20} >
						<GridItem  rowSpan={3} colSpan={1}>
								{props._id}
								<Link to={`notes/${props._id}`}><Text mb={2}>{message}</Text>
								<Text mb={2}>{creator}</Text>
								<Button mr={2} colorScheme="facebook"><Link to={`notes/${id}/edit`}>Edit</Link></Button>
								<Button colorScheme="red">Delete</Button>
								</Link>
						</GridItem>
		 	</Box>	
	)
}

export default Notes
