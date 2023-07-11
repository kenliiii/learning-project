import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { cartAction } from "./store/cart-slice";
import {collection,getDoc} from 'firebase/firestore'
import { db } from "./FireStore";
let isstart=true
function App() {
  const isShowCart = useSelector((state) => state.ui.cartIsShow);
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  const useCollertionRef=collection(db,'carts')


  useEffect(() => {
    const sendHttp = async (cart) => {
      const response = await fetch(
        "https://react-http-35cf1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "put", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw Error("can not send");
      }
   
    };
if(isstart){
  isstart=false
  return
}  
    try {
      sendHttp(cart);
    } catch {
      console.log("error");
    }}
  , [cart]);
  
  useEffect(()=>{
    const getData=async()=>{
    const sendHttpGet = async () => {
      const response = await fetch(
          "https://react-http-35cf1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json")
      
        if (!response.ok) {
          throw Error("can not send");
        }
      
       const responseDate=await response.json()
      

       return responseDate
      };
      try {
        const data= await sendHttpGet();
        console.log(data);
      dispatch(cartAction.replace(data))
      } catch {
        console.log("error");
      }
  }
  getData()
},[])
  
 
  return (
    <Layout>
      {isShowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
