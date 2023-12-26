import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest,) {

    // Loading the jwt token, this token is generated in the `auth/*` section
    const authToken = request.cookies.get("jwt");

    // simple checking
    if (!authToken?.value) {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
    }

    try {
        // decode the jwt in the edge, return error if not valid
        // ! Vulnerability: decoder key must be secret
        await jwtVerify(authToken.value, new TextEncoder().encode('R2h8sPqJ4T9g3nF1'))

        // returning path
        NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
}

// Filter routes that allow middleware
export const config = {
    matcher: ['/', '/upload'],
}