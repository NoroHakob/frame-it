export default function ImageUpload() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* left sidebar */}
      <div className="w-64 p-4 bg-white overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Background</h2>
      </div>

      {/* image preview */}
      <div className="flex-1 p-8">
        <div
          style={{
            backgroundImage: `linear-gradient(to-right, red, blue)`,
          }}
        >
          <h1>Image</h1>
        </div>
      </div>
    </div>
  );
}
