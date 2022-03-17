import { useState, useCallback } from 'react';

interface IState {
  status: 'ready' | 'loading' | 'error';
  value: any;
  error: any;
}

export function useSingleAsync(asyncFunction) {
  const [state, setState] = useState<IState>({
    status: 'ready',
    value: null,
    error: null,
  });

  const onSuccess = useCallback((response: any) => {
    setState((prevState) => ({
      ...prevState,
      status: 'ready',
      value: response,
    }));
    return Promise.resolve(response);
  }, []);

  const onError = useCallback((error:any) => {
    setState((prevState) => ({
      ...prevState,
      status: 'error',
      error: error,
    }));
    return Promise.reject(error);
  }, []);


  const execute = useCallback(
    (...args) => {
      if (!asyncFunction) return;
      setState((prevState) => ({
        ...prevState,
        status: 'loading',
        value: null,
        error: null,
      }));

      return asyncFunction(...args)
        .then(onSuccess)
        .catch(onError);
    },
    [asyncFunction, onSuccess, onError],
  );
  if (!asyncFunction) return;
  return { execute, ...state };
}

// export const useAsync = (...params: any) =>{
//   return params
//     .map((item) => {
//       if (Array.isArray(item)) {
//         if (item.length > 0) {
//           return useSingleAsync(item[0]);
//         }
//         return undefined;
//       }
//       return useSingleAsync(item);
//     });
// };
