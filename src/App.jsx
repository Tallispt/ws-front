import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import Main from './pages/Main'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          
          <Route path='/' element={<Main/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
