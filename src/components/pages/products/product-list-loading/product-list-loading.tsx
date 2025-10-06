export async function ProductListLoading() {
  return (
    <div
      className={
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
      }
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="w-full h-45 bg-white rounded-lg" />
      ))}
    </div>
  );
}
