import NextAuth from 'next-auth';

export default NextAuth({
  callbacks: {
    session({ session }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  providers: [],
});
