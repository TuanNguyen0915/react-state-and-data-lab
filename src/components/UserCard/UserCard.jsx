import './UserCard.css'
import ProfileInfo from './ProfileInfo'
import ContactInfo from './ContactInfo'
import { useState } from 'react'


const UserCard = (props) => {
  const [showProfile, setShowProfile] = useState(true)
  const [showContact, setShowContact] = useState(false)
  function handleOnClick() {
    setShowContact(!showContact)
    setShowProfile(!showProfile)
  }

  return (
    <div className='user-card'>
      {showProfile && <ProfileInfo user={props.user} />}
      {showContact && <ContactInfo user={props.user} />}
      <button className='btn' onClick={handleOnClick}>
        {showContact?"Hide":"Show"} Contact Info
        </button>
    </div>
  )
}

export default UserCard