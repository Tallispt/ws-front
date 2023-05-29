import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import Main from './pages/Main'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

import { UserProvider } from './context/userContext';
import useToken from './hooks/useToken';

function App() {
  return (
    <ChakraProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            
              <Route path='/' element={          
              <ProtectedRouteGuard>
                <Main/>
              </ProtectedRouteGuard>
              }/>

          </Routes>
        </Router>
      </UserProvider>
    </ChakraProvider>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}

export default App;
