import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import User from "../../../../server/src/models/userModel";
import EditProfileModal from "./modals/EditProfileModal";


const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  return (
    <>
      <div>
        <div>
          <span>Name:</span> <span>{User.fullName}</span>
        </div>
        <div>
          <span>Email:</span> <span>{User.email}</span>
        </div>

        <div>
          <span>Phone:</span> <span>{User.mobileNumber}</span>
        </div>

        <button className="border px-5 py-2 bg-amber-200" onClick={setIsEditModalOpen(true)}>
          Edit Profile
        </button>
      </div>

      {isEditProfileModalOpen && <EditProfileModal onClose = {()=>{setIsEditProfileModalOpen(false)}} ></EditProfileModal>}
    </>
  );
};

export default UserProfile;
