const ProfileInfo = (props) => {
  return ( 
    <>
    <img src={props.user.avatar} />
    <h1>{props.user.name}</h1>
    <h2>({props.user.username})</h2>
    </>
   )
}
 
export default ProfileInfo