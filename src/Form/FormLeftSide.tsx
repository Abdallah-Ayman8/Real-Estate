import { Home, ArrowRight } from "lucide-react";

export default function FormLeftSide() {
  return (
    <div className="relative w-full hidden md:flex md:w-[50%] rounded-3xl rounded-tr-none rounded-br-none overflow-hidden bg-linear-to-br from-[#0b1a3a] via-[#132b5c] to-[#1c3a72] p-4 py-5.5 flex-col shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-white text-xl font-bold">Real-Estates</span>
      </div>

      <div className="mt-16">
        <h1 className="text-white text-2xl font-bold leading-tight">
          Join Real-Estates,
          <br />
          find home faster.
        </h1>
        <p className="mt-5 text-slate-300 text-base leading-relaxed max-w-sm line-clamp-3">
          Create a profile to save listings, message owners, and get notified
          when new places match what you want.
        </p>
      </div>

      <div className="flex-1 min-h-16" />

      <div className="rounded-2xl bg-white/10 border border-white/10 p-3 backdrop-blur-sm">
        <div className="relative rounded-xl overflow-hidden h-36 bg-linear-to-br from-blue-400 to-blue-600">
          <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between px-1 pb-1">
          <div>
            <p className="text-white font-bold text-lg">
              $2,095
              <span className="text-slate-300 font-normal text-sm">/month</span>
            </p>
            <p className="text-slate-300 text-sm">Palm Harbor, North Coast</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
