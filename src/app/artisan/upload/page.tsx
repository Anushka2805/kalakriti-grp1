export default function UploadArtwork() {
  return (
    <div className="max-w-xl bg-white border rounded-xl p-6">
      <h1 className="text-xl font-bold mb-6">Upload Artwork</h1>

      <div className="border-2 border-dashed rounded-lg p-8 text-center">
        <p className="text-gray-500 mb-4">
          Drag & drop your artwork image
        </p>
        <input type="file" />
      </div>

      <button className="mt-6 w-full bg-black text-white py-2 rounded-lg">
        Upload
      </button>
    </div>
  );
}
