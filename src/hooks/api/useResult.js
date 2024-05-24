import useAsync from '../useAsync';

import * as resultApi from '../../services/result';
import useToken from '../useToken';


export default function useResult(id) {
  const token = useToken()

  const {
    data: resultObj,
    loading: resultLoading,
    error: resultError,
    act: result
  } = useAsync(() =>resultApi.getResult(id, token));
  
  
  const arrayResultData = resultObj?.map(item => ({
    ...item,
    _id: item._id.$oid.toString(),
    data_id: item.data[0]._id.$oid.toString(),
    info: {...item.result_info, ...item.data[0].data_info},
    original_image: item.data[0].original_image,
    drawn_image: item.data[0].drawn_image,
    created_at: new Date(item.created_at.$date).toLocaleDateString()
  }))

  const resultData = arrayResultData?.length === 1 ? arrayResultData[0] : null;

  return {
    resultData,
    resultLoading,
    resultError,
    result
  };
}