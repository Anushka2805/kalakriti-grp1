import StatCard from "@/components/artisan/StatCard";
import ArtworkCard from "@/components/artisan/ArtworkCard";

export default function ArtisanDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Welcome back 👋</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Artworks" value="12" />
        <StatCard title="Posts" value="8" />
        <StatCard title="Orders" value="3" />
        <StatCard title="Revenue" value="₹12,400" />
      </div>

      <section>
        <h2 className="font-semibold mb-4">Recent Artworks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <ArtworkCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
