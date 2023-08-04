import useAsync from '../useAsync';

import * as dataApi from '../../services/data';
import useToken from '../useToken';


export default function useDetectSensor() {
  const token = useToken()

  const {
    loading: detectLoading,
    error: detectError,
    act: detect
  } = useAsync((data) => dataApi.detect(data, token), false);

  return {
    detectLoading,
    detectError,
    detect
  };
}