import { useState } from 'react';
import loginImg from '../../Assets/loginImg.jpg'
import Listing from '../../Api/Listing';
import toast from 'react-hot-toast';

function Register() {
  const [Regs, setRegs] = useState({
    email: "",
    password: "",
    name: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegs(values => ({ ...values, [name]: value }))
  }
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (loading) {
        return false;
      }
      
      setLoading(true);
      const main = new Listing();
      const response = await main.Register(Regs);
      console.log(response);
      if (response?.data?.status) {
        toast.success(response?.data?.message)
      } else {
        toast.error(response?.data?.message)
      }

      setLoading(false);
      setRegs({
        email: "",
        name: "",
        password: ""
      })
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      toast.error(error?.response?.data?.message)
    }
  };


  return (
    <>
      <div className="min-h-screen  flex justify-center ">
        <div className="p-[20px] w-full lg:p-[30px] flex flex-wrap md:flex-nowrap ">
          <div className="w-full h-full relative hidden md:flex">
            <img src={loginImg} alt="Login" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-full relative md:pl-[50px] lg:pl-[70px] md:pt-[100px] lg:pt-[120px] ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome to Furnixar!!</h3>
            <p className="text-sm mt-3 md:mt-5">Buy & sale your exclusive product only on Furnixar</p>
            <form className="mt-6" >
              <div className='mt-2'>
                <label className='font-medium text-base block mb-2'>Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name "
                  name="name"
                  value={Regs.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"  />
              </div>
              <div className='mt-2'>
                <label className="font-medium text-base block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={Regs.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>
              <div className='mt-2'>
                <label className="font-medium text-base block mb-2">Password</label>
                <input
                  name="password"
                  value={Regs.password}
                  type="password"
                  onChange={handleChange}
                  required
                  placeholder="*********"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>

              <div className='mt-2'>
                <label className="font-medium text-base block mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="*********"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>
              <div className="flex items-center mt-2 ">
                <input type="checkbox" name="remember" className="mr-2" />
                <span className="text-sm">Remember me</span>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-4 md:w-32 bg-yellow-700 text-white font-medium py-3"
              >
                {loading ? "Loading..." : "Register"}
              </button>
              <p className="text-sm mt-4">
                Already have an account!!{" "}
                <a href="/login" className="text-yellow-700 font-medium">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Register;