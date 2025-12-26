import Sidebar from "@/components/artisan/Sidebar";
import Topbar from "@/components/artisan/Topbar";
import FloatingMic from "@/components/artisan/FloatingMic";

export default function ArtisanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
        <FloatingMic />
      </div>
    </div>
  );
}
