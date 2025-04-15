import React from 'react'
import useDarkModeStore from '../../../Store/DarcModeStore';

export default function CardItem({ title, sum, card_icon_bg, icon, trend_icon, card_trend, precent }) {
    const { darkMode } = useDarkModeStore();

    return (
        <li className={darkMode ? "card_item" : "card_item_dark"}>
            <div className="card_item_top">
                <div className="card_data">
                    <h3 className='card__title'>{title}</h3>
                    <p className='card_sum'>{sum}</p>
                </div>

                <div className={card_icon_bg}>{icon}</div>
            </div>

            <p className={card_trend}>{trend_icon} <p>{precent}% <span className={darkMode ? 'trend_span' : 'trend_span_dark'}>За месяц</span></p></p>
        </li>
    )
}
