import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import CreateNote from './components/CreateNote'
import UpdateNote from './components/UpdateNote'
import NoPage from './components/NoPage'
import About from './components/About'
import { Box, Flex} from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box h="100%" d="flex">
      <Flex>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="create" element={<CreateNote/>}/>
            <Route path="*" element={<NoPage />} />
            <Route path="/:id/edit" element={<UpdateNote/>} />
          </Routes>
   
      </Flex>
        
   </Box>
  );
}

export default App;
