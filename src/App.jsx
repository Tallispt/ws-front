import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ResultPage from './pages/Result'
import SettingsPage from './pages/Settings'
import UserPage from './pages/User'
import DataPage from './pages/Data'
import ModePage from './pages/Mode'


import { UserProvider } from './context/userContext';
import useToken from './hooks/useToken';
import Header from './components/Header';
import AnalysisPage from './pages/Analysis';
import { ChakraThemes } from './style/themes';

function App() {
  return (
    <ChakraProvider 
      theme={ChakraThemes}
      toastOptions={{ defaultOptions: { position: 'top-left',
        colorScheme: 'teal',
        duration: '3000',
        isClosable: 'true' }}}
    >
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            
              <Route path='/app' element={          
              // <ProtectedRouteGuard>
              <>
                <Header/>
                <Outlet/>
              </>
              // </ProtectedRouteGuard>
              }>
                {/* <Route path="welcome" element={<FillSubscription />} /> */}
                <Route path="analysis" element={<AnalysisPage />} />
                <Route path="result" element={<ResultPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="user" element={<UserPage />} />
                <Route path="data" element={<DataPage />} />
                <Route path="mode" element={<ModePage />} />
                <Route index path="*" element={<Navigate to="/app/analysis" />} />
              </Route>

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
