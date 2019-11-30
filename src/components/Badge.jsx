import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'
import Gravatar from './Gravatar'

class Badge extends React.Component {
  render() {
    const { firstName, lastName, jobTitle, twitter, email } = this.props.badge
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo de la conferencia' />
        </div>
        <div className='Badge__section-name'>
          <Gravatar className='Badge__avatar' email={email} />
          <h1>
            {firstName || 'FIRST_NAME'} <br />
            {lastName || 'LAST_NAME'}
          </h1>
        </div>
        <div className='Badge__section-info'>
          <h3>{jobTitle || 'JOB_TITLE'}</h3>
          <div>@{twitter || 'twitter'}</div>
        </div>
        <div className='Badge__footer'>#jsconf</div>
      </div>
    )
  }
}
export default Badge
