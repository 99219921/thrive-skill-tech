import { DashboardSidebar } from "@/components/dashboard/sidebar";

const items = [
  { label: "Dashboard", href: "" },
  { label: "Courses", href: "/courses" },
  { label: "Students", href: "/students" },
  { label: "Payments", href: "/payments" },
  { label: "Coupons", href: "/coupons" },
  { label: "Lectures", href: "/lectures" },
  { label: "Certificates", href: "/certificates" },
  { label: "Webinar Leads", href: "/webinar-leads" },
  { label: "Website Content", href: "/website-content" },
  { label: "Support Tickets", href: "/support-tickets" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
  { label: "Logout", href: "/logout" }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-shell grid gap-6 py-8 lg:grid-cols-[280px_1fr]">
      <DashboardSidebar items={items} title="Admin Panel" basePath="/admin" />
      <div className="space-y-6">{children}</div>
    </div>
  );
}
