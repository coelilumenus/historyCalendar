import React from 'react';
import './contentCard.css'

const ContentCard = ({ order, date, year, term, definition, src, alt }) => {
    return (
        <div class={`content__item content__item-${order}`}>
            <div className="item-text">
                <p class="item-date _anim-items">{date}</p>
                <p class="item-year _anim-items">{year}</p>
                <dl class="_anim-items _anim-no-hide">
                    <dt>{term}</dt>
                    <dd>{definition}</dd>
                </dl>
            </div>
            <img className="item-img _anim-items _anim-no-hide" src={`${window.location.origin}${src}`} alt={alt} />
        </div>
    )
}

export default ContentCard;