import React, {useState} from 'react'
import axios from 'axios';
import { Box , Heading,FormControl,Input, Textarea, Button}  from  '@chakra-ui/react'
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
			    Message:<Textarea mt={2} name="message" value={message} onChange ={(e) => setMessage(e.target.value)} />
				Creator:<Input isInvalid errorBorderColor='red.300' mt={2} name="creator" value={creator} onChange={(e) => setCreator(e.target.value)} />
				<Button mt={2}  colorScheme="blue" type="submit">Submit</Button>
			</FormControl>
		</Box>
	)
}

export default CreateNote
