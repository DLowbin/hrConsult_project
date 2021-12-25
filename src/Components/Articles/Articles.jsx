import React, { useState, useEffect} from 'react';
import './Articles.css'
import Articleslist from './Articleslist';


function Articles() {
    const [articles, setArticles] = useState([]);
    const [artTitle, setTitle] = useState('');
    const [artBody, setBody] = useState('');

    useEffect(() => {
        const empty = localStorage.getItem('articles') || []
        setArticles(JSON.parse(empty))
    }, [])

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(articles))
    }, [articles])

    const addArticle = (e) => {
            e.preventDefault();
            const newArticle = {
                id: Date.now(),
                artTitle,
                artBody
            }
            setArticles([...articles, newArticle]);
            setTitle('')
            setBody('')
            }
            
    return (
        <div className='main__wrapper'>
                <form className="article__add" noValidate>
                    <h1 className="form__title">Добавить статью</h1>
                    <div className="form__email-wrapper">
                        <input className="form__input-field"
                            type="text"
                            placeholder="Название статьи"
                            value={artTitle}
                            onChange={event => setTitle(event.target.value)}
                        />
                    </div>
                    <div className="form__password-wrapper">
                        <input className="form__input-field"
                            type="textarea"
                            placeholder="Текст статьи"
                            value={artBody}
                            onChange={event => setBody(event.target.value)}
                        />
                    </div>
                    <button className='buyButton' type='submit' onClick={addArticle}>Добавить</button>
                    </form>
                    <Articleslist articles={articles}/>
        </div>

    );

};

export default Articles;