import React from 'react'

import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      twitter: '',
      jobTitle: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, form: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null })

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({ loading: false })

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }
  render() {
    console.log(`Badge id ${this.props.match.params.badgeId}`)
    if (this.state.loading) {
      return <PageLoading />
    }

    const badge = this.state.form

    return (
      <React.Fragment>
        <div className='BadgeEdit__hero'>
          <img
            className='BadgeEdit__hero-img img-fluid'
            src={header}
            alt='logo'
          />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                badge={badge}/>
            </div>
            <div className='col-6'>
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeEdit
