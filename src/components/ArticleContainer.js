import React from "react";
import Article from "./Article";
import '../styles/ArticleContainerStyles.css';

export default function ArticleContainer(props) {
    return (
        <div className="article--container">
            <h1 className="article--container--head">{props.title}</h1>
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    )
}