
## Show Phone Number in Admin Panel

### What Will Change

The Admin dashboard signups table currently shows: `#`, `Full Name`, `Email`, `Referral Code`, and `Signed Up`. The `phone_number` field exists in the database but is not visible to admins. This update makes it visible everywhere in the Admin panel.

### Changes to `src/pages/Admin.tsx`

**1. TypeScript Interface**
Add `phone_number` to the `Signup` interface so the data is properly typed:
```ts
interface Signup {
  id: string;
  email: string;
  full_name: string;
  phone_number: string | null;  // ADD THIS
  referral_code: string;
  created_at: string;
}
```

**2. Table Header**
Add a "Phone Number" column header between "Email" and "Referral Code":
```html
<th>Phone Number</th>
```

**3. Table Row Cell**
Display the phone number for each signup row (showing "—" if empty):
```html
<td>{signup.phone_number || "—"}</td>
```

**4. Search Filter**
Allow admins to search signups by phone number — add `phone_number` to the filter logic:
```ts
s.phone_number?.toLowerCase().includes(q)
```

**5. Excel Export**
Add "Phone Number" as a column in the downloaded Excel file:
```ts
"Phone Number": s.phone_number || "",
```

### No Database Changes Needed
The `phone_number` column already exists in the database from the previous migration. This is a pure frontend display update.
