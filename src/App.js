import React ,{useState} from 'react'; 
import Tweet from './Tweet';

export default function App() {
  const [users, setUser] = useState([
    {name: "Andy" , message: "No PLace Like 172.0.0.1" , number:"206K"},
    {name: "Everyson" , message: "Coding Creates Life" ,number:"90K"},
    {name: "Tim" , message: "APPLE UPCOMING EVENT", number:"1M"},
    {name: "Lavy" , message: "We connect Throught DOTS" , number:"54K"}
  ])
  
  return (
    <div className='app'> 
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} number={user.number} />
      ))}
    </div>
  );
}

// STATE AND COMPONENTS IN REACT TWEET