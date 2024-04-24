
import { useContext, useEffect, useState } from "react";
import userDefaultPic from "../assets/user.png" 
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {

const {user, createUpdate, setUser} = useContext(AuthContext) 
const [formdata, setFormData] = useState({})


useEffect(() => {
    setFormData({name: user?.displayName, photoURL: user?.photoURL})
} , [user])


const handleUpdateForm = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const fullName = formdata.name  
    const email = form.get("email");
    const photoURL = formdata.photoURL; 
    console.log(fullName, email, photoURL) 

    if(fullName && email && photoURL) {
        createUpdate(fullName, email, photoURL)
        .then(result => {
            console.log(result)
            setUser((prevUser) => {
                return {...prevUser, displayName: fullName, email: email, photoURL: photoURL}
            })
          toast.success("Profile Updated Successfully")
        })
    } 
} 

    return (
        <div className="container lg:w-2/5 mx-auto px-4 py-8">
            <Helmet>
           <title>Havenly | Update Profile</title>
           </Helmet>
      <div className="card bg-base-100 shadow-md rounded-lg">
        <div className="flex flex-col items-center gap-5">
            <img className="w-24 h-24 rounded-full text-center border-2 hover:border-red-500" src={user.photoURL || userDefaultPic }alt="" />
            <h2 className="font-bold">{user.displayName}</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleUpdateForm} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-medium">
                  Full Name:
                </span>
              </label>
              <input
                type="text"
                name="fullName"
                className="input input-bordered w-full"
              value={formdata.name}
              onChange={(e) => setFormData({...formdata, name: e.target.value }) }
              /> 
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-medium">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                value={user.email} 
              />
            </div>
            <div className="form-control">
              <label  className="label">
                <span className="label-text text-sm font-medium">
                  Photo URL:
                </span>
              </label>
              <input
                type="url"
                name="photoURL"
                className="input input-bordered w-full"
                value= {formdata.photoURL} 
                onChange={(e) => setFormData({...formdata, photoURL: e.target.value }) }
              />
            </div>
            <button type="submit" className="btn btn-primary hover:bg-primary-focus">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>

    );
};

export default UpdateProfile;