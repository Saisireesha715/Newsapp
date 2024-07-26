import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    category: "general",
    apikey:"c21b4baa4aac43daa704418e3344cbdc", // Ensure you pass the API key as a prop or use a default value.
  };

  static propTypes = {
    category: PropTypes.string,
    apikey: PropTypes.string.isRequired, // Ensure the API key is provided.
  };

  constructor(props) {
    super(props);
    console.log("I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      pagesize: 6,
    };
  }

  async updateNews() {
    const { category } = this.props;
    const { page, pagesize } = this.state;

  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4b714662ba014b5e8fbab311086a9fe8&page=${page}&pagesize=${pagesize}`;
    //const url = `https://newsapi.org/v2/top-headlines?&apiKey=${apikey}&category=${category}&page=${page}&pageSize=${pagesize}`;
    //const url =`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}&page=${page}&pagesize=${pagesize}`; 
   //const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c21b4baa4aac43daa704418e3344cbdc&page=${page}&pageSize=${pagesize}`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
      document.title=`Newsapp - ${category}`;
    } catch (error) {
      console.error('Error fetching articles:', error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews(); // Fetch news when the component mounts.
  }

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
      }),
      () => {
        this.updateNews();
      }
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => {
        this.updateNews();
      }
    );
  };

  render() {
    const { articles, loading, page, totalResults, pagesize } = this.state;

    return (
      <div className="container my-3">
       <h2>Top HeadLines - {this.props.category}</h2>
        {loading && <Spinner />}
        <div className="row">
          {!loading &&
            articles &&
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={
                    element.description
                      ? element.description.split(' ').slice(0, 16).join(' ')
                      : "Description is not provided"
                  }
                  imgUrl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  mode={this.props.mode}
        
                />
              </div>
            ))}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= Math.ceil(totalResults / pagesize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

