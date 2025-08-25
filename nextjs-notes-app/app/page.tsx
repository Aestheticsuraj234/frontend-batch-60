import { UserForm } from "@/components/user-form";
import UserList from "@/components/user-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Next.js CRUD App</h1>
          <p className="text-muted-foreground mt-2">
            A simple user management system demonstrating API route handlers with MongoDB and Prisma
          </p>
        </div>

        <UserForm
        
        />

        <UserList/>
      </div>
    </div>
  );
}
