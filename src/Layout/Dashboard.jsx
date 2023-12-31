import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import {  NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] =useCart()

    //admin from database
    const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4"></ul>
        {
            isAdmin ? <>

                        <li>

                            <NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home</NavLink>

                        </li>
                        <li>
                            <NavLink to="/dashboard/manageItems">

                              <FaList></FaList>
                               Manage Items</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                              Add Items</NavLink>
                              
                              </li>
                        <li>
                            <NavLink to="/dashboard/bookings">
                              <FaBook></FaBook>
                              Manage Bookings</NavLink>
                              
                              </li>
                        <li>
                            <NavLink to="/dashboard/users">
                               <FaUsers></FaUsers>
                              All Users</NavLink>
                              
                              </li>
            </>
            :
            <>
                            <li>

                                <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home</NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">

                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart({cart.length})</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/reservation">

                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink></li>
            </>
        }




   
            </div>
{/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;