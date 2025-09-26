import { useContext, useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import { MyContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CheckLogin({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setUser, user } = useContext(MyContext)
  const navigate = useNavigate();
  const GetUser = () => {
    const fetch = Api.get('/myprofile');
    fetch.then((res) => {
      if (res.data.status) {
        setUser(res.data.user)
      } else {
            navigate('/login');
            toast.error("You must have to login first.")
      }
    }).catch((err) => {
      console.log('err', err)
      navigate('/login');
      toast.error("You must have to login first. Something went wrong")
    })
  }

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <></>
  );
}

export default CheckLogin;
