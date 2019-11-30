import React from 'react'
import { Link } from 'react-router-dom'

import BadgesListItem from './BadgesListItem'
import './styles/BadgesList.css'


function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('')
  const [fiteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilteredBadges(result)
  }, [badges, query])

  return { query, setQuery, fiteredBadges}
}

function BadgesList(props) {
  const badges = props.badges

  const { query, setQuery, fiteredBadges} = useSearchBadges(badges)

  if (fiteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className='form-group'>
          <label>Filter Badges</label>
          <input
            className='form-control'
            type='text'
            value={query}
            onChange={e => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <div className='alert alert-danger text-center'>
          No badges were found!
        </div>
      </React.Fragment>
    )
  }
  return (
    <div className='BadgesList'>
      <div className='form-group'>
        <label>Filter Badges</label>
        <input
          className='form-control'
          type='text'
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }}
        />
      </div>
      <ul className='list-unstyled'>
        {fiteredBadges.map(badge => {
          return (
            <Link
              key={badge.id}
              className='text-reset text-decoration-none'
              to={`/badges/${badge.id}`}
            >
              <BadgesListItem badge={badge} />
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default BadgesList
