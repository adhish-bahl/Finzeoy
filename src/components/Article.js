import React, { useEffect, useState } from "react";
import '../styles/ArticleStyles.css';
import ArticleModal from "./ArticleModal";

export default function Article(props) {

    const [postedBy, setPostedBy] = useState("");

    function showModal() {
        var modal = document.getElementsByClassName("modal")[props.idx];
        var span = document.getElementsByClassName("close")[props.idx];

        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    useEffect(() => {
        fetch("https://finzeoy.000webhostapp.com/GetUserData.php?userId="+props.postedBy+"")
        .then(res => res.json())
        .then(data => setPostedBy(data.name))
    }, [])
    
    return (
        <div className="article">
            <div className="article--color"></div>
            <div className="article--content">
                <h2 className="article--title">{props.title}</h2>
                <h5 className="article--author">{postedBy.charAt(0).toUpperCase() + postedBy.slice(1)}, {props.date}</h5>
                <div className="article--body">
                    <p>{props.content.slice(0, 150)} ...</p>
                    <button className="article--readMore" onClick={showModal}>Read More</button>
                    <ArticleModal title={props.title} content={props.content}/>
                </div>
            </div>
        </div>
    )
}