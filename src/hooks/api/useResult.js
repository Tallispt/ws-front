import useAsync from '../useAsync';

import * as dataApi from '../../services/data';
import useToken from '../useToken';


export default function useResult() {
  const token = useToken()

  const {
    data: resultData,
    loading: resultLoading,
    error: resultError,
    act: result
  } = useAsync(dataApi.getUserDatas(token), false);

  return {
    resultData,
    resultLoading,
    resultError,
    result
  };
}