import React, {useState} from 'react'
import { Box , Heading, Textarea, Button, Text}  from  '@chakra-ui/react'
const CreateNote = () => {

	const [message, setMessage] = useState("");

	const handleInput = (e) => {
		let inputValue = e.target.value
		setMessage(e);
	}


	return (
		<Box background="gray.100" p={10} w="100%">
			<Heading color="gray.800">Create</Heading>
			<Textarea mt={2} placeholder='Here is a sample placeholder' />
			<Button mt={2} type="submit">Submit</Button>
		</Box>
	)
}

export default CreateNote
