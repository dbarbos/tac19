import axios from 'axios';

const urlBase = 'http://newsapi.org/v2/everything?';
const apiKey = '4b4f48e08ac44d3f8444e4e158212dcf';
const search = 'Coronavírus';

export default {
    getAllNews: async(page) => {
        const urlNews = urlBase + 'q=' + search + '&apiKey=' + apiKey + "&page=" + page + "&sortBy=publishedAt";
        return await axios.get(urlNews);
    }
}