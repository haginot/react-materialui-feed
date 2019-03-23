import React, {Component} from 'react';
import axios from 'axios';
import Article from "./Article";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            url: `http://${process.env.REACT_APP_FEED_API_URL}/timeline`,
        };

        this.getArticles(["python"]);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({url: `http://${process.env.REACT_APP_FEED_API_URL}/timeline`});
            let selected = nextProps.tags.filter(tag => tag.isChecked).map(tag => tag.value);
            this.getArticles(selected);
        }
    }

    getArticles(selected) {
        axios.post(this.state.url, {"tags": selected})
            .then(res => {
                const articles = res.data;
                this.setState({articles: articles});
            })
            .catch(error => {
                // console.log(error);
            });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.articles.map((news, i) => {
                    return ( <Article key={i} {...news}/> );
                })}
            </div>
        );
    }
}

export default Feed;
