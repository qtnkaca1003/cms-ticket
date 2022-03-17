

import { useLocation } from 'react-router';

export function useQueryParams() {
  const query = new URLSearchParams(useLocation().search);
  return query;
}