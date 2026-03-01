import Image from "next/image";
import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 font-sans">
      <main className="w-full max-w-md p-6">
        <Calculator />
      </main>
    </div>
  );
}
