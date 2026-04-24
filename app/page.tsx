export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.15),_transparent_30%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 animate-spin opacity-20" style={{ animationDuration: '30s' }}>
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="96" stroke="rgba(59,130,246,0.5)" strokeWidth="2" />
              <circle cx="100" cy="100" r="70" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
              <ellipse cx="100" cy="100" rx="85" ry="40" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" />
              <ellipse cx="100" cy="100" rx="40" ry="85" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" />
              <path d="M15 100c0-47 38-85 85-85s85 38 85 85-38 85-85 85-85-38-85-85Z" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
              <path d="M40 50h120" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
              <path d="M40 150h120" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
              <path d="M50 30l100 140" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
              <path d="M150 30L50 170" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
        <h1 className="text-5xl font-bold text-center w-full">
          Countries and States API
        </h1>
        <p className="mt-3 text-2xl text-center w-full">
          A simple API to fetch countries and their states.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-around w-full ">
          <a
            href="/api/countries"
            className="backdrop-blur-[3px] w-96 h-48 px-6 py-4 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Countries API &rarr;</h3>
            <p className="mt-4 text-xl">
              Fetch a list of countries with their ISO codes.
            </p>
          </a>
          <a
            href="/api/states/US"
            className="backdrop-blur-[3px] w-96 h-48 px-6 py-4 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">States API &rarr;</h3>
            <p className="mt-4 text-xl">
              Fetch a list of states for a given country ISO code (e.g., US).
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
