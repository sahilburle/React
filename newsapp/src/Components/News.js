import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="contaier mx-3 my-3">
        <h2>NewsMonkey - Top HeadLines</h2>
        <div className="row">
          <div className="col-md-3">
            <NewsItem title="myTitle" description="mydesc" imageUrl="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="/>
          </div>

          <div className="col-md-3">
            <NewsItem title="myTitle" description="mydesc" />
          </div>

          <div className="col-md-3">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
