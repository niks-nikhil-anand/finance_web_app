
<!-- import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  const tokens = cookieStore.getAll();

  return (
    <div>
      {tokens.map((cookie) => (
        <div key={cookie.name}>
          {cookie.name === 'authToken' || cookie.name === 'userAuthToken' ? (
            <div>
             
              <pre>{JSON.stringify(jwt.decode(cookie.value), null, 2)}</pre>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
} -->


<!-- import jwt from 'jsonwebtoken';
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
}  -->

