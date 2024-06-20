
import { Input } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { IState } from './reducers/cartReducers';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const { Search } = Input;


function App() {
  const navigate = useNavigate()
  const locate = useLocation()
  const siteNotSearch = ["cart", "checkout"]
  const dispatch = useDispatch()
  const addCart = (data: IState) => dispatch({ type: "ADD_CART", data: data })
  const cart = useSelector(state => state.cartReducers)
  const lenCart = useSelector(state => state.cartReducers.reduce((res: number, curr: IState) => (res + curr.quantity), 0))

  // For read data from session
  useEffect(() => {
    axios.get("http://localhost:3000/cart", {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res=>res.data.data.map((curr:IState)=>addCart(curr)))
  },[])

  // Write data to session before close
  useEffect(() => {
    const handleTabClose = async (event) => {
      event.preventDefault();
      
      await axios.post("http://localhost:3000/cart", { "cart": cart },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        })
      
      return (event.returnValue =
        'Are you sure you want to exit?');
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, [cart]);
  
  return (
    <> 
      <div className='flex justify-between pt-6'>
        <img className='cursor-pointer' onClick={()=>navigate("/")} src="https://images.ctfassets.net/q602vtcuu3w3/5Kn3hosoikXHaQhOx4GikS/a97e3757c14fb0539d553c0a0462f4c7/URBAN-OUTFITTERS_LOGO_2022.svg" alt="" />
        <div className='flex justify-end gap-3'>
          {siteNotSearch.reduce((res,curr)=>res && !locate.pathname.includes(curr),true)&&<Search placeholder="Search" size="large" style={{ width: 300 }} />}
          <div className='relative -bottom-2'>
            <ShoppingOutlined style={{fontSize:"26px"}} onClick={()=>navigate("/cart")}/>
            {
              lenCart>0 && <div className='absolute h-4 w-4 bg-black text-white font-semibold rounded-full text-xs text-center -right-1 top-0'>{lenCart}</div>
            }
          </div>
        </div>
      </div>  
      <Outlet/>
    </>
  )
}

export default App
