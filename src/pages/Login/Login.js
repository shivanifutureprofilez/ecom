import loginImg from '../../Assets/loginImg.jpg'


const Login = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div className="p-[20px] w-full lg:p-[30px] flex flex-wrap md:flex-nowrap ">
          {/* Left Side - Image */}
          <div className="w-full h-full relative hidden md:flex">
            <img src={loginImg} alt="Login" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Right Side - Form */}
          <div className="w-full relative md:pl-[50px] lg:pl-[70px] md:pt-[80px] lg:pt-[100px] ">
            <h3  className="text-2xl md:text-3xl font-bold text-gray-800">Welcome To Furnixar!!</h3>
            <p className="text-sm mt-3 md:mt-5">Buy & sale your exclusive product only on Furnixar</p>

            <form className="mt-6 ">
              <div>
                <label className="font-medium text-base block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>

              <div>
                <label className="font-medium text-base block mb-2">Password</label>
                <input
                  type="password"
                  placeholder="*********"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" name="remember" className="mr-2" />
                <span className="text-sm">Remember me</span>
              </div>

              <button
                type="submit"
                className="w-full md:w-32 bg-yellow-700 text-white rounded-lg font-medium py-3"
              >
                Login
              </button>

              <p className="text-sm mt-4">
                Don't have an account yet?{" "}
                <a href="/register" className="text-yellow-700 font-medium">
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
