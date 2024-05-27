import useAsync from '../useAsync';

import * as resultApi from '../../services/result';
import useToken from '../useToken';


export default function useDeleteResult() {
  const token = useToken()

  const {
    loading: resultLoading,
    error: resultError,
    act: delResult
  } = useAsync((id) =>resultApi.delResult(id, token), false);

  return {
    resultLoading,
    resultError,
    delResult
  }};