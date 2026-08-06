interface ExecutiveGreetingProps {
  userName: string;
  companyName: string;
}

export function ExecutiveGreeting({
  userName,
  companyName,
}: ExecutiveGreetingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
        Good Morning,
      </p>

      <h1 className="mt-3 text-5xl font-bold tracking-tight">
        {userName}
      </h1>

      <p className="mt-3 text-lg text-slate-300">
        Welcome back to {companyName}.
      </p>
    </div>
  );
}