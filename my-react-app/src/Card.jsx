import profilePic from './assets/pic.jpg'

function Card (){

    return(
        <div className="card">
            <img alt="profile" src={profilePic}></img>
            <h1>DevChad</h1>
            <p>A 2nd Year BSIT Student</p>
        </div>

    );

}

export default Card