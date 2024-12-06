import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(true)

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setPage(page + 1);
    setTimeout(async () => {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    }, 200);
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    document.title = `NewsHunt - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (window.scrollY > 300) {
      setVisible(true);
    } else if (scrolled < 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const newsImage = {
    1: require("../Assets/news-image.jpg"),
  };

  return (
    <>
      <main>
        {/* {visible && (
          <button
            pos="fixed"
            bottom="50px"
            right="50"
            zIndex="100"
            onClick={scrollTop}
          >
            &#129121;
          </button>
        )} */}
        <h2 className="text-center mt-5">
          News Hunt - Top {capitalizeFirstLetter(props.category)} Headlines
        </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3 align-items-center justify-content-center">
            <div className="row">
              {articles.map((element, index) => {
                return (
                  <div className="card-container col-md-5 my-2" key={index}>
                    <NewsItems
                      title={
                        element.title
                          ? element.title.slice(0, 45)
                          : "No Title Available"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "No Description Available"
                      }
                      imageUrl={
                        element.urlToImage ? element.urlToImage : newsImage[1]
                      }
                      newsUrl={element.url}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </main>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 1,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
