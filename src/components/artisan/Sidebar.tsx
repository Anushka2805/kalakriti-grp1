import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 bg-white border-r px-6 py-8 flex-col">
      <h1 className="text-2xl font-bold mb-10">Kalakriti</h1>

      <nav className="space-y-5 text-sm">
        <Link href="/artisan" className="block font-medium">
          Dashboard
        </Link>
        <Link href="/artisan/upload" className="block">
          Upload Artwork
        </Link>
        <Link href="/artisan/create-post" className="block">
          Create Post
        </Link>
        <Link href="/artisan/profile" className="block">
          My Profile
        </Link>
      </nav>
    </aside>
  );
}
