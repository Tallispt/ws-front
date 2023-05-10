import useAsync from '../useAsync';

import * as userApi from '../../services/auth';

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(userApi.signUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
