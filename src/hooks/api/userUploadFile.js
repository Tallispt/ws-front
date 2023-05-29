import useAsync from '../useAsync';

import * as uploadApi from '../../services/upload';

export default function useUploadFile() {
  const {
    loading: uploadLoading,
    error: uploadError,
    act: upload
  } = useAsync(uploadApi.upload, false);

  return {
    uploadLoading,
    uploadError,
    upload
  };
}