import React, { useState, useEffect } from 'react'
import{ axios} from 'axios'
import {Box, Flex, Text ,Input, Textarea, Button, Heading} from '@chakra-ui/react'
const UpdateNote = (props) => {


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

	const updateNoteHandler = (e) => {
	    axios.put("http://localhost:8000/api/notes" + props.id, {
                        message: message,
						creator: creator,
                })
                .then((res) =>{
					if(res.data.errors) {
						console.log(res.data.errors)
					}
					else {
						console.log(res.data)
												//this takes the :id via props so after editing user is now on the details
					}  
                   
                })
                .catch(err => { 
                        console.log(err.response);
                })   

	}



	return (
		<Box>
		<Heading>Edit Note </Heading>
		<form onSubmit={updateNoteHandler}>
			    Message:<Textarea font="2xl" mt={2} name="message" value={message} onChange ={(e) => setMessage(e.target.value)} />
				Creator:<Input isInvalid errorBorderColor='red.300' mt={2} name="creator" value={creator} onChange={(e) => setCreator(e.target.value)} />
				<Button mt={2}  colorScheme="blue" type="submit">Submit</Button>
			</form>
		</Box>
	)
}

export default UpdateNote
