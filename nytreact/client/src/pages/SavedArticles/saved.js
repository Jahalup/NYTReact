import React, { Component } from "react";
import API from "../../utils/API";
import { SavedArticle } from "../../components/EachArt";
import { Container} from "../../components/Grid";
import { Nav } from "../../components/Navbar";
import { CardSaved } from "../../components/Card";

class SavedArticles extends Component {

    state={
        SavedArticles: []
    };

    componentWillMount() {
        this.loadArticles();
    }

    loadArticles = () => {
         
        API.getArticles().then(results => {this.setState({SavedArticles: results.data
        })
        // console.log(results);
        // console.log(SavedArticles);
    })
};

deleteArticle = (id) => {
    console.log(id);
   
   API.deleteArticle(id).then(results => {
    this.setState({ SavedArticles: []});
    this.loadArticles();
   })
   .catch(err => console.log(err));    
}



render() {
    return (
        <Container fluid>
        <Nav />
        <CardSaved>
        {this.state.SavedArticles.map((result, i) => (
                <SavedArticle
               key = {i}
                title={result.title}
                url={result.url}
                summary={result.summary}
                date={result.date}
                onClick={() => this.deleteArticle(result._id)
                }
                />
            ))}


            </CardSaved>



        </Container>
    )
}
}

export default SavedArticles;