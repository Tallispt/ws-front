import useAsync from '../useAsync';

import * as resultApi from '../../services/result';
import useToken from '../useToken';


export default function useSaveResult() {
  const token = useToken()

  const {
    data: resultResponse,
    loading: saveResultLoading,
    error: saveResultError,
    act: saveResult
  } = useAsync((data) => resultApi.save(data, token), false);

  return {
    resultResponse,
    saveResultLoading,
    saveResultError,
    saveResult
  };
}