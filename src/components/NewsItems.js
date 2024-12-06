import React from "react";

const NewsItems = (props) => {
  
    let { title, description, imageUrl, newsUrl, date, source} = props;
    return (
      <>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              Source: {source}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated at {new Date(date).toGMTString()}
              </small>
            </p>
            <button  style={{backgroundColor:"#404E7C", borderRadius:"5px", border:"none"}}><a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm text-white" 
            >
              read more&rarr;
            </a></button>
          </div>
        </div>
      </>
    );
  
}

export default NewsItems;
