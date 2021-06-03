import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useQuery = () => {
  const location = useLocation();
  return useMemo(() => new URLSearchParams(location.search), [location]);
};

/*

# Usage
import { useQuery } from "./utils";


## URL > https://github.com/filoscoder/js-react-utils/new/main?readme=1
const readme = useQuery.get("readme"); // Output > 1

*/
