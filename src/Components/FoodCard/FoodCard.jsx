// import { useContext } from "react";
// import { AuthContext } from "../../providers/Authprovider";

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {
    const { image, name, price, recipe } = item;
    //add to cart kortysi akta jeykono select id 
    // const{user} = useContext(AuthContext)
    const{user} = useAuth();
    const navigate= useNavigate()
    const handleAddToCart = food =>{
        if(user && user.email){
            //send cart item to the database
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                   //send the user login page
                   navigate('/login')
                }
            });
        }
    }
    ///////////
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                     onClick={()=> (handleAddToCart(item)) }
                    
                    
                    className="btn btn-primary border-0 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;