import React from 'react';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        }
    }
    
    async componentDidMount() {
        if(this.state.articles.length === 0) {
            const url = "https://covid19-us-api.herokuapp.com/news"
            const response = await fetch(url);
            const data = await response.json();
            this.setState({articles: data.message});
        }
    }

    render() {
        this.componentDidMount();
        return (
            <div className="mb-5">
                {this.state.articles
                    .map(article => (
                        <div key={article.id} className="news-article">
                        <span className="row m-0 py-1">
                            <a className="col-9 h6" href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                            <p className="col text-muted text-right">{article.published.trim()}</p>
                        </span>
                            <hr></hr>
                        </div>
                    ))}
            </div>
        );
    }
}

export default News;

