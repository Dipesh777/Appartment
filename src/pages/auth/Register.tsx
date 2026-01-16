import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [userID, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>Login</button>
      <div className="Registration-Container">
        <form>
          <label>User ID</label>
          <input type="text" placeholder="Enter Your User ID" value={userID}/>
          <label>Set Password</label>
          <input type="text" placeholder="Enter Your New Password" value={password}/>
        </form>
      </div>
    </div>
  )
};

export default Register;
