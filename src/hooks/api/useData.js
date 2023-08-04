import useAsync from '../useAsync';

import * as dataApi from '../../services/data';
import useToken from '../useToken';


export default function useData() {
  const token = useToken()

  const {
    data: dataData,
    loading: dataLoading,
    error: dataError,
    act: data
  } = useAsync((id) => dataApi.getData(id, token), false);

  return {
    dataData,
    dataLoading,
    dataError,
    data
  };
}