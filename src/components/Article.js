import React from "react";
import '../styles/ArticleStyles.css';

export default function Article() {
    return (
        <div className="article">
            <div className="article--color"></div>
            <div className="article--content">
                <h2 className="article--title">Title</h2>
                <h5 className="article--author">Person, date</h5>
                <div className="article--body">
                    <p>The content of the article goes here. This is only a part of the article. The whole article can 
                        be viewed as a modal. The modal would display over this page and can be viewed on click. It would
                        display the title, the author and the whole content...
                    </p>
                    <button className="article--readMore">Read More</button>
                </div>
            </div>
        </div>
    )
}