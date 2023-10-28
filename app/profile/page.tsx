"use client";

import { RootState } from "@/lib/store";
import { AssignsideTrue, Assignsidefalse, updateUser } from "@/lib/store/slices/Allslices";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const siebarcheck = useSelector((state :RootState) => state.siebarcheck)
  const Users:any = useSelector((state :RootState) => state.user);

  const handleUpdateUser = () => {
    const updatedUser = { name: "Johsdfsdfdsfn", email: "john@example.comefdsadfsdf" }; // Replace with your updated user data
    dispatch(updateUser(updatedUser));
  };

  const handleSidebarOpen = () => {
    // Dispatch the action to set siebarcheck to true
    dispatch(AssignsideTrue());
  };

  const handleSidebarClose = () => {
    // Dispatch the action to set siebarcheck to false
    dispatch(Assignsidefalse());
  };

  return (
    <div>
      <button onClick={handleUpdateUser}>Update User</button>
      <p>{Users.name}</p>
      {siebarcheck ? (
        <div>
          {/* Sidebar is open */}
          <button onClick={handleSidebarClose}>Close Sidebar</button>
        </div>
      ) : (
        <div>
          {/* Sidebar is closed */}
          <button onClick={handleSidebarOpen}>Open Sidebar</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
