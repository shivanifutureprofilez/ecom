import toast, { Toaster } from 'react-hot-toast';
import loginImg from '../../Assets/loginImg.jpg'
import { Api } from '../../Api/Api';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const [regs, setRegs] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {    //event object
    const name = e.target.name;
    const value = e.target.value;
    setRegs(values => ({ ...values, [name]: value }));  //spread syntax
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (regs.password === '' || regs.email === '') {
        console.log("regs", regs)
        toast.error("All fields are required.");
        return false;
      }
      //if(regs.password==)
      setLoading(true);
      const response = Api.post("/login", regs)
      response.then((res) => {
        if (res?.data?.status) {
          toast.success(res?.data?.message);
          localStorage.setItem('token', res?.data?.token)
          navigate('/');
        }
        else {
          toast.error(res?.data?.message);
        }
        setRegs({
          name: "",
          email: "",
          password: ""
        })
        setLoading(false);
      }).catch((err) => {
        console.log("Hello from catch block", err);
        toast.error(err?.response?.data?.message);
        setLoading(false);
      })
    }
    catch (error) {
      console.log("error :", error);
      toast.error(error.response.data.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center ">
        <div className="p-[20px] w-full lg:p-[30px] flex flex-wrap md:flex-nowrap ">

          <div className="w-full h-full relative hidden md:flex">
            <img src={loginImg} alt="Login" className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="w-full relative md:pl-[50px] lg:pl-[70px] md:pt-[145px] lg:pt-[165px] ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome To Furnixar!!</h3>
            <p className="text-sm mt-3 md:mt-5">Buy & sale your exclusive product only on Furnixar</p>

            <form className="mt-6 " onSubmit={handleSubmit}>
              <div>
                <label className="font-medium text-base block mb-2">Email</label>
                <input onChange={handleChange}
                  type="email" value={regs.email} name='email'
                  placeholder="Enter Your Email Address"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  required
                />
              </div>
              <br />
              <div>
                <label className="font-medium text-base block mb-2">Password</label>
                <input onChange={handleChange} name='password'
                  type="password" value={regs.password}
                  placeholder="*********"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  required
                />
              </div>
              <br />
              <div className="flex items-center">
                <input type="checkbox" name="remember" className="mr-2" required />
                <span className="text-sm">Remember me</span>
              </div>
              <br />
              <button
                type="submit"
                className="w-full md:w-32 bg-yellow-700 text-white rounded-lg font-medium py-3"
              >
                Login
              </button>

              <p className="text-sm mt-4">
                Don't have an account yet?{" "}
                <Link to="/register" className="text-yellow-700 font-medium">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default Login;
