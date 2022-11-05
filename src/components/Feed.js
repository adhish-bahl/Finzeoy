import React, { useEffect, useState } from "react";
import ArticleContainer from "./ArticleContainer";
import '../styles/FeedStyles.css';

export default function FeedPage() {

    const [articlesData, setArticlesData] = useState([]);

    useEffect(() => {
        fetch("https://finzeoy.000webhostapp.com/GetArticles.php")
        .then(res => res.json())
        .then(data => setArticlesData(data));
    }, [])

    const investmentArticles = articlesData.filter(article => {
        return article.type === "investment";
    })

    const generalArticles = articlesData.filter(article => {
        return article.type === "general";
    })

    return (
        <div className="feed--container">
            <ArticleContainer title="Investment Articles" articles={investmentArticles} />
            <ArticleContainer title="General Articles" articles={generalArticles} />      
        </div>
    )
}