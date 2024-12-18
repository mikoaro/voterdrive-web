import CircularProgress from "@/components/ui/CircularProgress";

export default function ExamplePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-bold">Circular Progress Example</h1>
      <div className="flex gap-6">
        {/* Circular Progress with different values */}
        <CircularProgress value={75} color="stroke-blue-500" />
        <CircularProgress value={45} color="stroke-red-500" />
        <CircularProgress value={90} color="stroke-green-500" />
      </div>
    </div>
  );
}
