import React from 'react'
import CardItem from './CardItem'
import { PiStudentFill } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import useDarkModeStore from '../../../Store/DarcModeStore';

export default function CardWrapper() {
  const { darkMode } = useDarkModeStore();

  return (
    <>
      <h1 className='home_title'>Главная</h1>
      <ul className='card_wrapper'>
        <CardItem title={"Ученики"} sum={763} card_icon_bg={`card_icon_bg ${darkMode ? "card_icon_bg_blue" : "card_icon_bg_blue_dark"}`} icon={<PiStudentFill className={`card_icon ${darkMode ? "card_icon_blue" : "card_icon_white_dark"}`} />} trend_icon={<FaArrowTrendUp className='card_trend_icon' />} card_trend={"card_trend card_trend_up"} precent={8.5} />
        <CardItem title={"Группы"} sum={56} card_icon_bg={`card_icon_bg ${darkMode ? "card_icon_bg_yellow" : "card_icon_bg_yellow_dark"}`} icon={<MdGroups className={`card_icon ${darkMode ? "card_icon_yellow" : "card_icon_white_dark"}`} />} trend_icon={<FaArrowTrendUp className='card_trend_icon' />} card_trend={"card_trend card_trend_up"} precent={12.7} />
        <CardItem title={"Учителя"} sum={60} card_icon_bg={`card_icon_bg ${darkMode ? "card_icon_bg_green" : "card_icon_bg_green_dark"}`} icon={<PiChalkboardTeacherBold className={`card_icon ${darkMode ? "card_icon_green" : "card_icon_white_dark"}`} />} trend_icon={<FaArrowTrendDown className='card_trend_icon' />} card_trend={"card_trend card_trend_down"} precent={4.9} />
        <CardItem title={"Прибыль"} sum={"$" + 1.223} card_icon_bg={`card_icon_bg ${darkMode ? "card_icon_bg_red" : "card_icon_bg_red_dark"}`} icon={<GiReceiveMoney className={`card_icon ${darkMode ? "card_icon_red" : "card_icon_white_dark"}`} />} trend_icon={<FaArrowTrendDown className='card_trend_icon' />} card_trend={"card_trend card_trend_down"} precent={4.9} />
      </ul>
    </>

  )
}