import { useState } from "react";
import { AddGame } from './adminPage/AddGame';
import { DeleteGame } from './adminPage/DeleteGame';

export const Admin = () => {
  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <AddGame />
      <DeleteGame />
    </div>
  );
};
