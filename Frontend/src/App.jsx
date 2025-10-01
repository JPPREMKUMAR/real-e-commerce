
import { Routes, Route } from 'react-router-dom'
import { MainContext } from './context/MainContext'
import { useContext } from 'react'
import SignUp from "./pages/SignUp"
import LogIn from './pages/LogIn'
import RetPassword from './pages/ResetPassword'
import CheckEmail from './pages/CheckEmail'
import Verification from './pages/Verification'
import CreateNewPassword from './pages/CreateNewPassword'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import AddAddress from './pages/AddAddress'
import ConfirmedOrder from './pages/ConfirmedOrder'
import EmptyCart from './pages/EmptyCart'
import Wishlist from './pages/Wishlist'
import EmptyWishlist from './pages/EmptyWishlist'
import MyOrder from './pages/MyOrder'
import OrderDetails from './pages/OrderDetails'
import Error from './pages/Error'
import Navbar from "./components/Navbar"
import AuthNavbar from './components/AuthNavbar'
import Footer from "./components/Footer"

const App = () => {




  return (

    <div>
      <AuthNavbar />

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/reset-password" element={<RetPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/verification" element={< Verification />} />
        <Route path="/create-new-password" element={< CreateNewPassword />} />
        <Route path="/" element={< Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/info" element={<Account />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/order-confirmed" element={<ConfirmedOrder />} />
        <Route path="/empty-cart" element={<EmptyCart />} />
        <Route path="/account/wishlist" element={<Wishlist />} />
        <Route path="/account/empty-wishlist" element={<EmptyWishlist />} />
        <Route path="/account/my-orders" element={<MyOrder />} />
        <Route path="/my-order/:id" element={<OrderDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App