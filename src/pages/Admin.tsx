import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Shield, LogOut, Users, Mail, Calendar, Loader2, ArrowLeft, Search, Download, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

interface Signup {
  id: string;
  email: string;
  full_name: string;
  referral_code: string;
  created_at: string;
}

const ADMIN_PASSWORD = "aivideopro2025";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [signups, setSignups] = useState<Signup[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      toast.success("Welcome, admin!");
    } else {
      toast.error("Invalid password");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchSignups();
    }
  }, [isAuthenticated]);

  const fetchSignups = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-signups`,
        {
          headers: {
            "x-custom-auth": ADMIN_PASSWORD,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setSignups(data || []);
    } catch (error) {
      console.error("Error fetching signups:", error);
      toast.error("Failed to load signups");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
  };

  const filteredSignups = useMemo(() => {
    if (!searchQuery.trim()) return signups;
    const q = searchQuery.toLowerCase();
    return signups.filter(
      (s) =>
        s.full_name?.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q) ||
        s.referral_code?.toLowerCase().includes(q)
    );
  }, [signups, searchQuery]);

  const todayCount = useMemo(
    () => signups.filter((s) => new Date(s.created_at).toDateString() === new Date().toDateString()).length,
    [signups]
  );

  const weekCount = useMemo(() => {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return signups.filter((s) => new Date(s.created_at) >= weekAgo).length;
  }, [signups]);

  const referredCount = useMemo(
    () => signups.filter((s) => s.referral_code && s.referral_code !== "1").length,
    [signups]
  );

  const exportToExcel = () => {
    const rows = signups.map((s, i) => ({
      "#": i + 1,
      "Full Name": s.full_name || "",
      Email: s.email,
      "Referral Code": s.referral_code || "1",
      "Signed Up": new Date(s.created_at).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Signups");
    XLSX.writeFile(wb, `signups_${new Date().toISOString().slice(0, 10)}.xlsx`);
    toast.success("Excel file downloaded!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
            <p className="text-muted-foreground text-center text-sm mb-6">
              Enter the admin password to continue
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-secondary/50 border-border"
              />
              <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground">
                Sign In
              </Button>
            </form>
            <Link to="/" className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            <h1 className="font-semibold text-lg">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Site
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Total Signups</span>
            </div>
            <p className="text-3xl font-bold">{signups.length}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Today</span>
            </div>
            <p className="text-3xl font-bold">{todayCount}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">This Week</span>
            </div>
            <p className="text-3xl font-bold">{weekCount}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <UserCheck className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Referred Users</span>
            </div>
            <p className="text-3xl font-bold">{referredCount}</p>
          </div>
        </div>

        {/* Signups Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="font-semibold text-lg">Signup List</h2>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search name, email, code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-secondary/50 border-border"
                />
              </div>
              <Button variant="outline" size="sm" onClick={exportToExcel} disabled={signups.length === 0}>
                <Download className="w-4 h-4 mr-2" />
                Excel
              </Button>
              <Button variant="outline" size="sm" onClick={fetchSignups} disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : filteredSignups.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              {signups.length === 0 ? "No signups yet." : "No results match your search."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">#</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Full Name</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Email</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Referral Code</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Signed Up</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSignups.map((signup, index) => (
                    <tr key={signup.id} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                      <td className="p-4 text-sm text-muted-foreground">{index + 1}</td>
                      <td className="p-4 text-sm font-medium">{signup.full_name || "—"}</td>
                      <td className="p-4 text-sm">{signup.email}</td>
                      <td className="p-4 text-sm">
                        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-medium ${
                          signup.referral_code && signup.referral_code !== "1"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary text-muted-foreground"
                        }`}>
                          {signup.referral_code || "1"}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {new Date(signup.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
