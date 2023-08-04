import useAsync from '../useAsync';

import * as dataApi from '../../services/data';
import useToken from '../useToken';


export default function useSaveData() {
  const token = useToken()

  const {
    loading: saveDataLoading,
    error: saveDataError,
    act: saveData
  } = useAsync((data) => dataApi.save(data, token), false);

  return {
    saveDataLoading,
    saveDataError,
    saveData
  };
}