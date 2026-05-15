export default function Loading() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 animate-pulse">
      {/* Skeleton Title */}
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      
      {/* Skeleton Product List Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border border-gray-100 p-4 rounded-xl space-y-3">
            <div className="h-40 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
