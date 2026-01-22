import React from "react";

const EditProfileModal = ({onClose}) => {
  return (
    <>
        {/* here height will be accorting to maximum and witdh is fixed */}
        {/* modal ka z-index will be maximum after header */}
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100" >
        <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto"></div>
        <div>EditProfileModal</div>
      <button onClick={()=>onClose()} > X</button>
      </div>
    </>
  );
};

export default EditProfileModal;
