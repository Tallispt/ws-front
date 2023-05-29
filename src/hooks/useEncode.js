import useAsync from './useAsync';

import * as imageHandler from '../services/imageHandler'

export default function useEncode() {
  const {
    loading: encodeLoading,
    error: encodeError,
    act: encode
  } = useAsync(imageHandler.convertToBase64, false);

  return {
    encodeLoading,
    encodeError,
    encode
  };
}