import Notiflix from 'notiflix';
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie/550?';
const API_KEY = '1c102e66bbcfd2f02de567c2b0418712';

let per_page = 20;

export async function getMovies() { 
  try {
      // const params = new URLSearchParams ({
      //   image_type : 'photo',
      //   orientation : 'horizontal',
      //   safesearch : true 
      // });
    
    const resp = await axios.get(`${BASE_URL}?key=${API_KEY}`);
    // const photosFromAPI = resp.data.hits;
    // const totalFromAPI = resp.data.total;      
    console.log(resp)
    return ({})
  } catch (err) {
    Notiflix.Notify.failure("Something went wrong! Please try to reload.")
    console.log(err)
  } 
}


