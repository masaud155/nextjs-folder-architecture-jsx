export default function DashboardLoading() {
  return (
    <div className="grid gap-6">
      <div className="h-32 animate-pulse rounded-lg bg-white/10" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div className="h-32 animate-pulse rounded-lg bg-white/10" key={item} />
        ))}
      </div>
      <div className="h-96 animate-pulse rounded-lg bg-white/10" />
    </div>
  );
}
