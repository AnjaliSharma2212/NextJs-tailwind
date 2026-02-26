"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  users: User[];
};

export default function UsersClient({ users }: Props) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg py-2 px-5 m-5"
      />

      
      <table className='table text-shadow-green-300 border-2 rounded-lg m-5 w-3xl '>
        <thead>
          <tr className='text-green-400 text-center text-xl md:text-3xl font-bold'>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="text-center">
        {filteredUsers.map(user=><tr key={user.id}> 
        <th>{user.name}</th>
        <th>{user.email}</th>
            
        </tr>)}
        </tbody>
     
      </table>
    </>
  );
}