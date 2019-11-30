import React from 'react'

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked')
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      jobTitle,
      twitter
    } = this.props.formValues

    const error = this.props.error

    return (
      <div>        
        {error && <div className="alert alert-danger text-center">No se ha podido crear el badge :(</div>}
        <form onSubmit={this.props.onSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='firstName'
              value={firstName}
            />
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='lastName'
              value={lastName}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='email'
              name='email'
              value={email}
            />
          </div>
          <div className='form-group'>
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='jobTitle'
              value={jobTitle}
            />
          </div>
          <div className='form-group'>
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='twitter'
              value={twitter}
            />
          </div>
          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>        
        </form>
      </div>
    )
  }
}

export default BadgeForm
