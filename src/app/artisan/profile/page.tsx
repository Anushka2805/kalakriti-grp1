export default function ArtisanProfile() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Riya Arts</h1>
      <p className="text-gray-600">Handmade Pottery • Jaipur</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-40 bg-gray-200 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
