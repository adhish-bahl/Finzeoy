import React, { useState } from "react";
import Article from "./Article";
import '../styles/ArticleContainerStyles.css';

export default function ArticleContainer(props) {

    const articlesToDisplay = props.articles.map((article, index) => {
        return <Article key={article.articleid} title={article.title} postedBy={article.postedby} date={article.date} content={article.article} idx={index} />
    })

    return (
        <div className="article--container">
            <h1 className="article--container--head">{props.title}</h1>
            {articlesToDisplay}
        </div>
    )
}