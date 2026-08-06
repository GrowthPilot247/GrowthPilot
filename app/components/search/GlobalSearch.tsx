export function GlobalSearch() {
  return (
    <div className="hidden w-full max-w-md md:block">
      <input
        type="text"
        placeholder="Search anything..."
        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}