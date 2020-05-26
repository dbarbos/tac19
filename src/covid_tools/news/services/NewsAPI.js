import axios from 'axios';

const urlBase = 'https://us-central1-profile-app-5322d.cloudfunctions.net/connect/news_api/find?';
// const urlBase = 'http://localhost:5000/profile-app-5322d/us-central1/connect/news_api/find?';
const apiKey = '4b4f48e08ac44d3f8444e4e158212dcf';
const search = 'Coronavírus';

export default {
    getAllNews: async(page) => {
        const urlNews = urlBase + 'q=' + search + '&apiKey=' + apiKey + "&page=" + page + "&sortBy=publishedAt";
        return await axios.get(urlNews);
    }
}