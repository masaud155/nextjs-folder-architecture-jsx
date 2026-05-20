import { getDashboardStats } from "@/features/dashboard/queries/getDashboardStats";
import { Card } from "@/shared/ui/Card";

const labels = [
  ["Revenue", "revenue"],
  ["Active users", "activeUsers"],
  ["Conversion", "conversionRate"],
  ["Open issues", "openIssues"]
];

export async function DashboardStats() {
  const stats = await getDashboardStats();

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {labels.map(([label, key]) => (
        <Card className="p-5" key={key}>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{stats[key]}</p>
          <p className="mt-2 text-sm text-emerald-300">Mock data from feature query</p>
        </Card>
      ))}
    </div>
  );
}
