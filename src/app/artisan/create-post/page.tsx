export default function CreatePost() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white border rounded-xl p-4">
        <h2 className="font-semibold mb-3">Video Preview</h2>
        <div className="h-56 bg-gray-200 rounded-lg flex items-center justify-center">
          Video
        </div>
      </div>

      <div className="bg-white border rounded-xl p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold mb-3">Caption</h2>
          <p className="text-gray-600">
            Handcrafted art made with love ✨
          </p>
        </div>

        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg">
          Publish on Profile
        </button>
      </div>
    </div>
  );
}
