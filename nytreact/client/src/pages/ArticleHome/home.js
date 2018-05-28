import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import { Card } from "../../components/Card";
import { Article } from "../../components/EachArt";
import { Container} from "../../components/Grid";

class Articles extends Component {
    state = {
        topic: '',
        startyear: '',
        endyear: '',
        results: [],
        previousSearch: {},
        noResults: false
    }


handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    })
};

handleFormSubmit = event => {
    event.preventDefault();
    let { topic, startyear, endyear } = this.state;
    let query = { topic, startyear, endyear}
    console.log(query);
    console.log(this.state);
    this.getnewarts(query)

}

getnewarts = query => {
    if(query.topic !== this.state.previousSearch.topic ||
        query.startyear !== this.state.previousSearch.stargt    ||
        query.endyear !== this.state.previousSearch.endyear
    ) {
        this.setState({results: []})
    }


console.log(this.state.topic);
let topic = this.state.topic;
let startyear = this.state.startyear;
let endyear = this.state.endyear;

    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&h1=true&page=0"
    let key = "&api-key=ceaf7dab037f4a1a881beed337e40156"

    if (topic.indexOf(' ') >= 0) {
        topic = topic.replace(/\s/g, '+');
    }
     if (topic) {
         url += `&fq=${topic}`
     }
     if (startyear) {
         url += `&begin_date=${startyear}`
     }
     if (endyear) {
         url += `&end_date=${endyear}`
     }
 
     url+=key;
     console.log(url);

     API.queryNYT(url).then(results => {
         this.setState({
             results: [...results.data.response.docs],
             previousSearch: query,
             topic: '',
             startyear: '',
             endyear: ''
         }, function() {
             this.state.results.length === 0 ? this.setState({noResults: true}):this.setState({noResults: false})
         })
         console.log(this.state.results);
         
     })
     .catch(err => console.log(err))
}





render() {
    return (
       <Container fluid>
        <Card>
        <form>
            <Input
            value={this.state.topic}
            onChange={this.handleInputChange}
            name="topic" 
            placeholder="Topic"
            />
            <Input 
            value={this.state.startyear}
            onChange={this.handleInputChange}
            name="startyear" 
            placeholder="Start Year" />
            <Input 
            value={this.state.endyear}
            onChange={this.handleInputChange}
            name="endyear" 
            placeholder="End Year" />
            <FormBtn 
            onClick={this.handleFormSubmit}/>
                </form>
        </Card>
        <Card>
           
                
        {this.state.results.map((result, i) => (
                <Article
               key = {i}
                title={result.headline.main}
                url={result.web_url}
                summary={result.snippet}
                date={result.pub_date}
                type='Save'
                />
            ))}
        
       
        </Card>
        </Container>
            )}
            
        }
        

        export default Articles;
            

