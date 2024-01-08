//import useData from "./useData";  // for live fetching genres
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres"); // for live fetching genres
const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;
