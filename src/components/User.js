const User = (props) => {
    const {data} = props;
    const {userName, avatar, userLocation} = data;
    return (
        <div>
            <img src={avatar} />
            <h3>Name : {userName}</h3>
            <h3>Location : {userLocation}</h3>
        </div>
    )
}
    
    
export default User;