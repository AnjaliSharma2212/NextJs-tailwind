import type { Metadata } from "next";
import UsersClient from "./UserClient";




export const metadata: Metadata = {
  title: "Users",
  description: "List of users fetched on the server",
};

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function UsersPage() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
  const users: User[] = await res.json();

  return (
    <>
      <UsersClient users={users} />
      
    </>
  );
}