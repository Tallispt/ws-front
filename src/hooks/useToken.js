import { useContext } from 'react';
import UserContext from '../context/userContext';

export default function useToken() {
  const { userData: user } = useContext(UserContext);

  return user.token;
}
