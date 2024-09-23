import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware();

export const config = { matcher: ["/", "/protected-route/:path*"] };
