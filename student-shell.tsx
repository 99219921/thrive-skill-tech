import { DashboardSidebar } from "@/components/dashboard/sidebar";

const items = [
  { label: "Dashboard", href: "" },
  { label: "My Courses", href: "/my-courses" },
  { label: "Watch Videos", href: "/watch-videos" },
  { label: "Certificates", href: "/certificates" },
  { label: "Notes / Downloads", href: "/downloads" },
  { label: "Doubt Support", href: "/doubt-support" },
  { label: "Resume Builder", href: "/resume-builder" },
  { label: "Internship Apply", href: "/internship-apply" },
  { label: "Refer & Earn", href: "/refer-earn" },
  { label: "Profile", href: "/profile" },
  { label: "Logout", href: "/logout" }
];

export function StudentShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-shell grid gap-6 py-8 lg:grid-cols-[280px_1fr]">
      <DashboardSidebar items={items} title="Student Panel" basePath="/student" />
      <div className="space-y-6">{children}</div>
    </div>
  );
}
