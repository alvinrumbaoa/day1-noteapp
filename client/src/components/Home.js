import React,{useState, useEffect} from 'react'
import { Box , Heading, Input, Grid, GridItem,  Button, Flex, Text}  from  '@chakra-ui/react'
import{ Link} from 'react-router-dom'
import axios from 'axios'



const Home = (props) => {
	const [id, setID] = useState({})
	const [notes, setNotes] = useState([]);

	const bgColor=["#CDF0EA", "#F9F9F9", "#F6C6EA", "#FAF4B7", "#CDC2AE", "#9A86A4", "#00FFAB" ,"#B1BCE6", "#B7E5DD", "#F1F0C0"]

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
		<Box background="gray.100" p={10} h="auto" w="100%">
			<Input  htmlSize={4} width='auto' w="50%" placeholder="Search for a Note"></Input>
			<Flex display="flex" direction="row"  align="center" justify="space-between">
			<Heading textAlign="center" p={10} >Welcome</Heading>
			<Button alignItems="center" justify="center" colorScheme="blackAlpha"> <Link to="/create">Add New Note</Link></Button>
			</Flex>
			
			<Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' gap={4} direction="row" justify="space-around">
			{
				notes.map((getNotes, index) =>(
					<Box key={index} p={10} m={2} background={bgColor[index]} justify="center" h='200px' boxShadow=" 2px 5px 10px black" borderRadius={20} >
						<GridItem  rowSpan={3} colSpan={1}>
								<Link to="/edit/:id"><Text mb={2}>{getNotes.message}</Text></Link>
								<Text mb={2}>{getNotes.creator}</Text>
								<Button mr={2} colorScheme="facebook"><Link to="/" + getNotes._id +"/edit">Edit</Link></Button>
								<Button colorScheme="red">Delete</Button>
						</GridItem>
					</Box>	
				
				))
			}
			
			</Grid>
	
			
		</Box>
	)
}

export default Home;
