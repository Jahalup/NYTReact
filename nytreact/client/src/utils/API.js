import axios from 'axios';

export default {
    getArticles: function() {
        return axios.get("/api/articles");
    },
    queryNYT: function(url) {
        return axios.get(url);
    },
    saveArticle: function(savedarticle) {
        return axios.post("/api/articles", savedarticle);
    }
    
    


}