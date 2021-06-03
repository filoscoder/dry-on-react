import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useQuery = () => {
const location = useLocation();
return useMemo(() => new URLSearchParams(location.search), [location]);
}