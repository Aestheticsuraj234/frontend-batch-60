"use client";

import type React from "react";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner";


interface User {
    id: string;
    name: string;
    email: string;
    age?: number;
}

interface UserFormProps {
    user?: User
    onSuccess?: () => void
    onCancel?: () => void
}

export function UserForm({ user, onSuccess, onCancel }: UserFormProps) {
const [formData , setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    age: user?.age?.toString() || "",
})  

const [isLoading , setIsLoading] = useState(false)

const handleSubmit = async (e:React.FormEvent)=>{
  e.preventDefault();
  setIsLoading(true);

  try {
    const payload = {
       name: formData.name,
        email: formData.email,
        age: formData.age ? Number.parseInt(formData.age) : undefined,
    }

    const url = user ? `/api/users/${user.id}` : "/api/users"
    const method = user ? "PUT" : "POST"

    const response = await fetch(url , {
      method,
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload)
    })

    const result = await response.json();

    if(result.success){
      toast.success(`User ${user ? "updated" : "created"} successfully`)
      if(!user){
          setFormData({ name: "", email: "", age: "" })
      }
    }
    else{
      toast.error("Error")
    }

  } catch (error) {
    console.log(error)
    toast.error("something went wrong")
  }
  finally{
    setIsLoading(false)
  }
}


return (
      <Card>
      <CardHeader>
        <CardTitle>{user ? "Edit User" : "Create New User"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age (optional)</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              min="1"
              max="120"
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : user ? "Update User" : "Create User"}
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
)

}