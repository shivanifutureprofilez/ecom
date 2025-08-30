import { useState } from 'react';
import loginImg from '../../Assets/loginImg.jpg'
import Listing from '../../Api/Listing';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const [regs, setRegs] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  })

  const [loading, setLoading] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);

  const handleFocus = () => {
    setShowPasswordRules(true);
  };

  const handleFocusFalse = () => {
    setShowPasswordRules(false);
  };

  const handleChange = (e) => {    //event object
    const name = e.target.name;
    const value = e.target.value;
    setRegs(values => ({ ...values, [name]: value }));  //spread syntax
  }

  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!passwordRegex.test(regs.password)) {
        toast.error(
          "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
        );
        return false;
      }
      if (regs.password !== regs.confirmpassword) {
        toast.error("Password not matched");
        return false;
      }

      setLoading(true);
      const main = new Listing();
      const response = await main.Register(regs)
      if (response?.data?.status) {
        toast.success(response?.data?.message);
        navigate('/');
      }
      else {
        toast.error(response?.data?.message);
      }
      setLoading(false);
      setRegs({
        name: "",
        email: "",
        password: ""
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
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
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
                  value={regs.name}
                  onChange={handleChange}
                  required
                  onFocus={handleFocusFalse}
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"  />
              </div>
              <div className='mt-2'>
                <label className="font-medium text-base block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={regs.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  onFocus={handleFocusFalse}
                />
              </div>
              <div className="mt-2">
                <label className="font-medium text-base block mb-2">Password</label>
                <input
                  name="password"
                  value={regs.password}
                  type="password"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required

                  placeholder="*********"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />

                {showPasswordRules && (
                  <div className="container mx-auto mt-3">
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li className={/[a-z]/.test(regs.password) ? "text-green-600" : ""}>
                        A lowercase letter
                      </li>
                      <li className={/[A-Z]/.test(regs.password) ? "text-green-600" : ""}>
                        A capital (uppercase) letter
                      </li>
                      <li className={/[0-9]/.test(regs.password) ? "text-green-600" : ""}>
                        A number
                      </li>
                      <li className={/[^A-Za-z0-9]/.test(regs.password) ? "text-green-600" : ""}>
                        A special character
                      </li>
                      <li className={regs.password.length >= 8 ? "text-green-600" : ""}>
                        Minimum 8 characters
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className='mt-2'>
                <label className="font-medium text-base block mb-2">Confirm Password</label>
                <input onChange={handleChange}
                  type="password" name='confirmpassword'
                  placeholder="*********"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  onFocus={handleFocusFalse}
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
                <Link to="/login" className="text-yellow-700 font-medium">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Register;