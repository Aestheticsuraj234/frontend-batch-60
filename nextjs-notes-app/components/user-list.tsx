
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const UserList = async() => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json()

    const users = data.data;
   
  return (
    <div className='space-y-6'>
         <Card>
        <CardHeader>
          <CardTitle>Users ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {users.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No users found. Create your first user above!</p>
          ) : (
            <div className="space-y-4">
              {users.map((user:any) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    {user.age && <p className="text-sm text-muted-foreground">Age: {user.age}</p>}
                    <p className="text-xs text-muted-foreground">
                      Created: {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {/* <Button variant="outline" size="sm" onClick={() => setEditingUser(user)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => deleteUser(user.id)}>
                      Delete
                    </Button> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default UserList