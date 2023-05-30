import React from 'react';
import style from './index.module.css';

const Content = () => {
    return(
        <div className={style.content}>
            <div className={style.firstContent}>
                <div className={style.contentGradient}></div>
                <div>Primeiro conteúdo: Gradiente</div>
            </div>
        </div>
    )
}

export default Content;