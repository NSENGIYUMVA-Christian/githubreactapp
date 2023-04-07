import {useState, useEffect} from "react"

const url = 'https://api.github.com/users';
const myImg = `https://media.licdn.com/dms/image/D4D03AQFFov7JZu54Qg/profile-displayphoto-shrink_400_400/0/1667823935550?e=1686182400&v=beta&t=ioXd5MIbYYaPXTTc-SceDVbkSPqgh1lMopqkYFtoKVI`

const App = () => {
const [user, setUser] = useState([])

// useEffect block
useEffect(()=>{
const getData = async()=>{
  try {
    const response = await fetch(url)
    const users= await response.json()
    setUser(users)
   
  } catch (error) {
    console.log(error)
  } 
}
getData()
},
[])
// end of useEffect

  return <section>
    <h2 style={{textAlign:"center"}} >GitHub user</h2>
    <ul className="users" >
      <li> <img src={myImg} alt="chris gitHub profile" /> 
      <div>
        <h5>NSENGIYUMVA CHRISTIAN</h5>
        <a href="https://github.com/NSENGIYUMVA-Christian" target="_blank" style={{color:"purple"}}>visit me on GitHub</a> <br></br>
        <a href="https://www.linkedin.com/in/nsengiyumva-christian-b9947a233/" target="_blank" style={{color:"purple"}} >visit me on linkedIn</a>
      </div>
      </li>
      {user.map((us)=>{
        const {id, login, avatar_url,html_url} = us
        return <li key={id} >
          <img src={avatar_url}  alt={login} />
          <div>
            <h5>{login}</h5>
            <a href={html_url} target="_blank" style={{color:"purple"}} >Profile</a>
          </div>
        </li>
      })}
    </ul>
  </section>;
};
export default App
