import useAsync from '../useAsync';

import * as resultApi from '../../services/result';
import useToken from '../useToken';


export default function useData() {
  const token = useToken()

  const {
    data: dataObj,
    loading: dataLoading,
    setData,
    error: dataError,
    act: data
  } = useAsync(() => resultApi.getUserResultData(token));

  const transformedData = dataObj?.map(item => ({
    ...item,
    _id: item?._id.$oid.toString(),
    data_id: item?.data_id.$oid.toString(),
    original_image: item?.data[0]?.original_image,
    created_at: new Date(item?.created_at.$date).toLocaleDateString()
  }))

  return {
    transformedData,
    dataLoading,
    dataError,
    data,
    setData
  };
}