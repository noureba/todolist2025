import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const  {data} = await axios.post("http://localhost:5000/login", {
        email: user.email,
        password: user.password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setUser({});
        toast.success("register success");
        navigate('/admin')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" bg-white shadow-md">
        <form action="" className="flex flex-col p-5 gap-3" method="POST" onSubmit={loginHandler}>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="border border-gray-900 p-1"
              value={user.email}
              onChange={(e)=> setUser({...user, email:e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="border border-gray-900 p-1"
              value={user.password}
              onChange={(e)=> setUser({...user, password:e.target.value})}
            />
          </div>
          <div className="flex flex-col">
            <input type="submit" className="bg-gray-900 text-white my-5 p-3"/>
              Login
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
