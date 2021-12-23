import React from 'react';
import './Articles.css'
import {useContext} from "react";
import {AuthContext} from "../../App";



const Articles = () => {

    const {isAuth} = useContext(AuthContext)
    return (
        <div>
            {isAuth && 
                <form className="Article" noValidate>
                    <h1 className="form__title">Добавить статью</h1>
                    <div className="form__email-wrapper">
                        <input className="form__input-field" type="text"
                               placeholder="Название статьи"
                        />
                    </div>
                    <div className="form__password-wrapper">
                        <input className="form__input-field" type="text"
                                placeholder="Текст статьи"
                        />
                    </div>
                    <button className='submit__button' type='submit'>Добавить</button>
                    </form>
            }
            <div className="Article">
                <h1>Название статьи</h1>
                <span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aperiam corporis delectus enim error fugit harum inventore ipsam laudantium natus officia omnis pariatur praesentium quod, sit totam veritatis. Perspiciatis, soluta.</span><span>Amet cum dicta ducimus ea enim eos expedita illo molestiae molestias mollitia nihil nisi non nostrum odit porro praesentium quae quas sapiente, sed, unde? Consequuntur eveniet id odio saepe tempore.</span><span>Aliquam deleniti, facere facilis nam perferendis perspiciatis quae soluta voluptates! Ab accusamus id impedit incidunt iusto molestiae nam optio placeat provident quibusdam quos repellat repellendus, sit? Assumenda libero molestias quasi.</span><span>Ab cum eaque optio? A, aspernatur aut doloremque ea id optio praesentium qui quisquam quo vero! A doloribus error eveniet in inventore iusto nam non pariatur quae quisquam quos, velit.</span><span>A alias eaque minus. Aspernatur delectus doloremque incidunt possimus quae quisquam rem reprehenderit sequi totam! Ab aliquid consequatur cupiditate earum ipsum iste minima obcaecati quasi sunt ut? Dolor reiciendis, vero.</span><span>A ab accusantium beatae corporis dolore dolorem enim fugit illum inventore, minus sed tempora temporibus totam ut, velit veritatis voluptatem voluptatibus! Aliquid labore laborum mollitia necessitatibus provident totam ut voluptate.</span><span>A, aspernatur dolorem eligendi id illo ipsam iusto laborum laudantium quisquam repudiandae. Alias aperiam, aut autem facilis, impedit ipsa magnam, magni minima odio quaerat qui quo quos soluta velit voluptatibus.</span><span>Accusamus aliquid atque dolore eos est facilis fugit hic id, impedit magnam nostrum, provident qui quos repellendus reprehenderit sequi sint suscipit vitae voluptas voluptatibus! Delectus id impedit ipsam sit unde.</span><span>Aspernatur delectus dolor ducimus ea eius eos magni modi placeat praesentium quis reiciendis, tempora unde voluptatibus. Aliquid, aspernatur blanditiis, consequuntur cum itaque natus possimus quae saepe similique sunt ullam unde!</span><span>Ad animi blanditiis cumque cupiditate delectus dignissimos ea eius error ex facilis id illo, laudantium maiores nostrum obcaecati placeat repellendus repudiandae sapiente velit veniam. Consequuntur id laudantium neque quam voluptatibus!</span>
                </span>
            </div>
        </div>
    );
};

export default Articles;