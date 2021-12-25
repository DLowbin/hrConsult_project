import React from "react";
import ArticleItem from "./ArticleItem";

const Articleslist = ({articles}) => {
    return (
        <div>
            {articles.map(articlePiece =>
                <ArticleItem article={articlePiece} key={articlePiece.id}/>
            )}
        </div>
    );      
};

export default Articleslist;

