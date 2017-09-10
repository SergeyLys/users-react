import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
    <div className="row">
        <div className="small-12 large-7 columns">
            <h2>Ошибка 404: Страница не найдена</h2>
            <p>Такой страницы не существует. Если вы набирали адрес вручную, проверьте, нет ли опечаток. Если вы перешли по ссылке, возможно, она содержит ошибку, или соответствующая страница была удалена.</p>
            <Link to='/'>Back</Link>
        </div>
    </div>
)

export default Error;