import React from 'react';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';



export default function Page() {
  const cookieStore = cookies()
  const authToken = cookieStore.get("userAuthToken");

  // Decode the JWT token to get the username
  const decodedToken = jwt.decode(authToken.value);
  const username = decodedToken?.username;

  return (
    <div>
      <div>
        <pre>{JSON.stringify(username, null, 2)}</pre>
      </div>
      <Contact username={username} />
    </div>
  );
}
