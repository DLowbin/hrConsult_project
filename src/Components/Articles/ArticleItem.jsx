import React from "react";

const ArticleItem = (props) => {
    return (
        <div className="article">
            <h2>{props.article.artTitle}</h2>
            <span>{props.article.artBody}</span>
        </div>
    );
};

export default ArticleItem;






