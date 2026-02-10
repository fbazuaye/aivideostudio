

## Secure Admin Authentication

The current admin login uses a hardcoded password checked in the browser, which is insecure. This plan replaces it with proper authentication using Lovable Cloud's built-in auth system and a server-side role check.

### How It Works

1. **You sign up as a regular user** on the app (email + password)
2. **A database role is assigned** to your account marking you as an admin
3. **The admin page checks your role server-side** before granting access

### Steps

#### 1. Database Setup
- Create a `user_roles` table to store admin roles securely
- Create a `has_role()` helper function for safe role checking
- Add RLS policies so only admins can read the roles table
- Insert your user account as an admin after you sign up

#### 2. Admin Login Page Update
- Replace the hardcoded password form with email/password login using the built-in auth system
- After login, check the `user_roles` table server-side to verify admin status
- If the user is not an admin, show an "Access Denied" message
- Remove the insecure `sessionStorage` and hardcoded password

#### 3. Edge Function Update
- Update the `admin-signups` edge function to verify the caller's auth token and admin role instead of using a static password header

### What You'll Need To Do
1. **Approve the database migration** when prompted
2. **Sign up with your email** on the app (or use an existing account)
3. **I'll assign admin role** to your account via a one-time database insert

### Technical Details

**New tables:**
- `user_roles` (id, user_id, role) with RLS enabled

**New database function:**
- `has_role(user_id, role)` -- security definer function to check roles without RLS recursion

**Modified files:**
- `src/pages/Admin.tsx` -- replace hardcoded password with auth-based login and role check
- `supabase/functions/admin-signups/index.ts` -- validate auth token + admin role instead of static header

