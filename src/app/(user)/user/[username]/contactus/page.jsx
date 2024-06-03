import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies()
  const authToken = cookieStore.get("userAuthToken");

  return (
    <div>
     
            <div>
             
              <pre>{JSON.stringify(jwt.decode(authToken.value)?.username, null, 2)}</pre>
           
        </div>

    </div>
  );
} 