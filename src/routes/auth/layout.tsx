import { component$, Slot } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import jwt from 'jsonwebtoken'

export const onRequest: RequestHandler = async ({ cookie, redirect, url }) => {

  // load the cookie with the jwt token
  const token = cookie.get("jwt_access_token")?.value || ""
  console.log(token)

  // verify a token symmetric
  // ! Vulnerability: jwt secret should be in .env file
  jwt.verify(token, 'R2h8sPqJ4T9g3nF1', function (err) {

    // check if token is valid
    if (err) {
       return cookie.delete('jwt_access_token')
    }
    throw redirect(
      308,
      new URL('/', url).toString()
    );
  });
}

export default component$(() => {
  return (
    <div class="flex items-center justify-center bg-gray-50  min-h-screen" >
      <Slot />
    </div>
  );
});
