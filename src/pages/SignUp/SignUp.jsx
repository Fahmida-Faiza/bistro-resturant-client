import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const SignUp = () => {
    const axiosPublic= useAxiosPublic()

    const {
        register,
        handleSubmit,
        reset,

        formState: { errors }, } = useForm()

        const {createUser, updateUserProfile} =useContext(AuthContext);
        const navigate = useNavigate()

    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photoURL)
            .then(() =>{
                //create user entry in the database

                const userInfo={
                    name: data.name,
                    email:data.email
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        console.log('user added to the database')
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')

                    }
                })


                /////////////
                // console.log('user  profile info updated')
               
            })
            .catch(error => console.log(error))
        })
    };
    return (
   <>
            <Helmet>
                <title>Bistro Boss ! Sign Up</title>

            </Helmet>
   
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo url field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />

                                {errors.email && <span className="text-red-600">email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p>
                                    password must 6 characters</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p><small>Already have an account <Link to="/login"></Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
   
   </>
    );
};

export default SignUp;
