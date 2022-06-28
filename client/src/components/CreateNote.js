import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Box , Heading,FormControl, FormLabel, FormHelperText, Input, Textarea, Button, Text}  from  '@chakra-ui/react'
const CreateNote = () => {

	const [message, setMessage] = useState("");
	const [creator, setCreator] = useState("");
	const [likes, setLikes] = useState(0);

	const createNoteHandler = (e) => {
	    axios.post("http://localhost:8000/api/notes", {
                        message: message,
						creator: creator,
						likes: likes,
                })
                .then((res) =>{
                        console.log(res.data);    
                   
                })
                .catch(err => { 
                        console.log(err.response);
                })   
	}




	return (
		<Box background="gray.100" p={10} w="100%">
			<Heading color="gray.800">Add a Note</Heading>
			
			

			<FormControl onSubmit={createNoteHandler}>
			    <Textarea mt={2} name="message" value={message} onChange ={(e) => setMessage(e.target.value)} />
				<Input mt={2} name="creator" value={creator} onChange={(e) => setCreator(e.target.value)} />
				<Button mt={2}  colorScheme="blue" type="submit">Submit</Button>
			</FormControl>
		</Box>
	)
}

export default CreateNote
