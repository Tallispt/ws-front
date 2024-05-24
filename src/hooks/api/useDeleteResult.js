import useAsync from '../useAsync';

import * as resultApi from '../../services/result';
import useToken from '../useToken';


export default function useDeleteResult(id) {
  const token = useToken()

  const {
    loading: resultLoading,
    error: resultError,
    act: result
  } = useAsync(() =>resultApi.delResult(id, token), false);

  return {
    resultLoading,
    resultError,
    result
  }};