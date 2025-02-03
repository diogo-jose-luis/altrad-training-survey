
import middleware from 'next-auth/middleware'

export default middleware;

export const config = {
    //*: zero or more parameters
    //+: one or more parameteres
    //?: zero or one parameter
    //matcher: ['/users/:id*']
    matcher: ['/dashboard/:path*']
}