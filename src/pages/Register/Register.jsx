import loginImg from '../../Assets/loginImg.jpg'


function Register() {
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
            <form className="mt-6">
              <div className='mt-2'>
                <label className='font-medium text-base block mb-2'>Name</label>
                <input
                  type="name"
                  placeholder="Enter Your Name "
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>
              <div className='mt-2'>
                <label className="font-medium text-base block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>
              <div className='mt-2'>
                <label className="font-medium text-base block mb-2">Password</label>
                <input
                  type="password"
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
                className="w-full mt-4 md:w-32 bg-yellow-700 text-white font-medium py-3"
              >
                Register
              </button>

              <p className="text-sm mt-4">
                Already have an account!!{" "}
                <a href="/login" className="text-yellow-700 font-medium">
                  Login
                </a>
              </p>
            </form>
          </div>
          {/* <div className="w-full relative md:pl-[50px] lg:pl-[70px] md:pt-[80px] lg:pt-[100px] ">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome To Furnixar!!</h3>
            <p className="text-sm mt-3 md:mt-5">Buy & sale your exclusive product only on Furnixar</p>

            <form className="mt-6 space-y-4">
               <label className='font-medium text-base block mb-2'>Name</label>
           <input type="email" id="default-input" placeholder="Enter Your Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-20 pt-3"></input>
            
          <label className='font-medium text-base block mb-2'>Email</label>
           <input type="email" id="default-input" placeholder="Enter Your Email Address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-20 pt-3"></input>
                           
          <label className='font-medium text-base block mb-2'>Password</label>
          <input type="password" name="mail" placeholder="Enter Password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-20 pt-3'></input>
        
           <label className='font-medium text-base block mb-2'>Password</label>
          <input type="password" name="mail" placeholder="Confirm Your Password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-20 pt-3'></input>
        
              <br/>
          <input type="checkbox" name="remember"></input>
      
          <span className='text-sm mt-5 text-left px-2'>Remember me</span>
        <br/>
          <button class="bg-yellow-700 h-12 bg-title text-white flex items-center justify-center text-sm md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary dark:text-white pt-4">Register</button>
        
            </form>
          </div> */}
        </div>
      </div>
    </>

  )
}

export default Register;