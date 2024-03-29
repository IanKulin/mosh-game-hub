//import useData from "./useData"; // for live loading
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents"); // for live loading
const usePlatforms = () => ({data: platforms, isLoading: false, error: null});

export default usePlatforms;
