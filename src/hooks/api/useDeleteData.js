import useAsync from '../useAsync';

import * as dataApi from '../../services/data';
import useToken from '../useToken';


export default function useDeleteData() {
  const token = useToken()

  const {
    loading: delDataLoading,
    error: delDataError,
    act: delData
  } = useAsync((id) =>dataApi.delDetect(id, token), false);

  return {
    delDataLoading,
    delDataError,
    delData
  }};