import React from "react";
import ArticleItem from "./ArticleItem";

const Articleslist = ({articles}) => {
    return (
        <div>
            {articles.map(articlePiece =>
                <ArticleItem article={articlePiece} />
            )}
        </div>
    );      
};

export default Articleslist;

