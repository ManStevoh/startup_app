import React from 'react';
import Link from 'next/link'; // Import Next.js Link
import { auth, signOut, signIn } from '@/auth';
import { Session } from 'inspector/promises'; // Assuming this is the correct import
import GitHub from 'next-auth/providers/github'; // Import GitHub provider
import { redirect } from 'next/dist/server/api-utils';

const Navbar = async () => {
  const session = await auth(); // Fetch session data

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="text-blue-500 cursor-pointer">Create</span>
              </Link>
              <form action={async() => {
                "use server"
                await signOut({ redirect: true, redirectTo: "/" });

              }}>
                <button type='submit'>Logout</button>
              </form>
              <Link href={`/user/${session?.user.id}`}> 
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={async() => {
                "use server"
                await signIn('github')

                }}>
              <button type='submit'>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;