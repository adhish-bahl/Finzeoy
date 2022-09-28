import React from "react";
import ArticleContainer from "./ArticleContainer";
import '../styles/FeedStyles.css';

export default function FeedPage() {
    return (
        <div className="feed--container">
            <ArticleContainer title="Investment Articles" />
            <ArticleContainer title="General Articles" />      
        </div>
    )
}