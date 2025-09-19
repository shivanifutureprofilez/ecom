import { useContext, useEffect, useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../Api/Api";
import { MyContext } from "../context/UserContext";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";


function Navbar({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setUser, user } = useContext(MyContext)
  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Pages", href: "/pages" },
    { name: "Shop", href: "/shop" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact-us" },
    { name: "Cart", href: "/cart"}
    //{ name: "Login", href: '/login' },
    //{ name: "Register", href: '/register' },
  ];
  const navigate = useNavigate();

  const GetUser = () => {
    const fetch = Api.get('/myprofile');
    fetch.then((res) => {
      if (res.data.status) {
        setUser(res.data.user)
      } else {
        // setUser(null);
        navigate('/login');
        toast.error("You must have to login first.")
      }
    }).catch((err) => {
      console.log('err', err)
      navigate('/login');
      toast.error("You must have to login first. Something went wrong")
    })
  }

  const logout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate('/login');
      toast.success("Logged out successfully.")
    }, 1000)
  }

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <div className="py-4 flex justify-center fixed  top-0 left-0 z-10 w-full">
      <div className="container m-auto">
        <div className="bg-[#ffffffa3] rounded-xl p-1 md:p-3 w-full shadow-md">
          <div className="flex items-center justify-between px-2 md:px-8 py-1 md:py-3">

            {/* Logo */}
            <div className="flex items-center space-x-2">
              {/* <span className="block text-2xl font-bold text-gray-800"> */}
              <img className="max-w-[200px] w-[200px]" src='/logo.png'/>
              {/* </span> */}
            </div>

            <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-yellow-600">
                    {link.name}
                  </Link>
                </li>
              ))}
                {user?.isAdmin == 1 ? <li>
                  <Link to={'/admin/product-add'} className="hover:text-yellow-600">
                    Add Product
                  </Link>
                </li> : ''}
            </ul>

            <div className="hidden md:flex items-center space-x-4">
              {/* <FiSearch className="text-xl cursor-pointer hover:text-yellow-600" />
              <div className="relative">
                <FiHeart className="text-xl cursor-pointer hover:text-yellow-600" />
              </div> */}

              {user ?
                <>
                  <div className="relative  flex  items-center space-x-4">
                    {/* <Link to="/cart">
                  <FiShoppingCart className="text-xl cursor-pointer hover:text-yellow-600" />
                </Link> */}

                    <div className="flex items-center gap-2">
                        <CgProfile size={28} className="ml-9"/>
                        <Link to="/myprofile" className="  font-semibold cursor-pointer hover:text-yellow-600 capitalize text-black">Hi, {user?.name}</Link>
                    </div>
                   
                    <button onClick={logout} className="text-gray-700 font-semibold cursor-pointer hover:text-yellow-600">Logout</button>
                  </div>
                </>
                :
                <>
                  <Link to="/login">
                    Login
                  </Link>
                </>}
              {/* <FiMoon className="text-xl cursor-pointer hover:text-yellow-600" /> */}
            </div>

            <div className="md:hidden">
              {isMobileMenuOpen ? (
                <FiX
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ) : (
                <FiMenu
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(true)}
                />
              )}
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-md px-6 py-4">
              <ul className="space-y-4 text-gray-700 font-semibold">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block hover:text-yellow-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name} +
                    </a>
                  </li>
                ))}
              </ul>


              <div className="flex items-center space-x-4 mt-4">
                <FiSearch className="text-xl cursor-pointer hover:text-yellow-600" />
                <FiHeart className="text-xl cursor-pointer hover:text-yellow-600" />
                <Link to="/cart"> <FiShoppingCart className="text-xl cursor-pointer hover:text-yellow-600" /></Link>
                <FiMoon className="text-xl cursor-pointer hover:text-yellow-600" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
