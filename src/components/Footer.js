import React from 'react'
import {TfiWorld} from 'react-icons/tfi'
import {FaWhatsapp} from 'react-icons/fa'
import {RiTelegramLine} from 'react-icons/ri'
import {SlSocialVkontakte} from 'react-icons/sl'

export default function Footer() {
  return (
     <footer>
        <div className='footer-logo'>
           <span>QPICK</span>
        </div>
        <div className='footer-menu'>
           <ul>
              <li>Избранное</li>
              <li>Корзина</li>
              <li>Контакты</li>
           </ul>
        </div>
        <div className='footer-lang'>
           <div>
              <span>Условия сервиса</span>
           </div>
           <div className='lang-lang'>
              <TfiWorld/>
              <span>Рус</span>
              <span>Eng</span>
           </div>
        </div>
        <div className='footer-social'>
           <SlSocialVkontakte className='social'/>
           <RiTelegramLine className='social'/>
           <FaWhatsapp className='social'/>
        </div>
    </footer>
  )
}
