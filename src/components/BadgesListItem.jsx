import React from 'react'
import './styles/BadgesListItem.css'
import twitter from '../images/twitter.svg'
import Gravatar from './Gravatar'

function BadgesListItem(props) {

  const { badge } = props

  return (
    <li className='Badge__item'>
      <div className='Badge__item-image'>
        <Gravatar email={badge.email} />
      </div>
      <div className='Badge_item-description'>
        <p>
          {badge.firstName} {badge.lastName}
        </p>
        <p className='twitter-link'>
          <img className='icon' src={twitter} alt='twitter icon' />
          {badge.twitter}
        </p>
        <p>{badge.jobTitle}</p>
      </div>
    </li>
  )
}

export default BadgesListItem
