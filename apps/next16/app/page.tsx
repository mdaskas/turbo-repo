import {
	LoginLink,
	LogoutLink,
	RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@repo/ui/components/button";

export default function Home() {
	return (
		<div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<LoginLink postLoginRedirectURL='http://localhost:3000'>
				Sign in
			</LoginLink>

			<RegisterLink postLoginRedirectURL='http://localhost:3000'>
				Sign up
			</RegisterLink>

			<LogoutLink postLogoutRedirectURL='http://localhost:3000'>
				Sign out
			</LogoutLink>
			<Button>Hello World</Button>
		</div>
	);
}
