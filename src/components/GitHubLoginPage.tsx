import { useState, type FormEvent } from 'react';
import { Github } from 'lucide-react';

const footerLinks = ['Terms', 'Privacy', 'Security', 'Contact GitHub', 'Manage cookies', 'Do not share my personal information'];

export default function GitHubLoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f8fa] text-[#1f2328] antialiased">
      <main className="flex flex-1 flex-col items-center px-4 pb-4 pt-12">
        <Github className="h-12 w-12 text-[#1f2328]" strokeWidth={1.5} aria-label="GitHub" />

        <h1 className="mt-4 text-2xl font-light leading-8 tracking-[-0.5px] text-[#1f2328]">
          Sign in to GitHub
        </h1>

        <div className="mt-4 w-full max-w-[340px] rounded-md border border-[#d1d9e0] bg-white p-4 shadow-[0_1px_0_rgba(31,35,40,0.04),inset_0_1px_0_rgba(255,255,255,0.25)]">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="login_field" className="mb-2 text-sm font-semibold text-[#1f2328]">
              Username or email address
            </label>
            <input
              id="login_field"
              name="login"
              type="text"
              autoComplete="username"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              autoFocus
              required
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              className="mb-4 h-8 w-full rounded-md border border-[#d1d9e0] bg-white px-3 py-[5px] text-sm text-[#1f2328] shadow-[inset_0_1px_0_rgba(208,215,222,0.2)] transition-shadow focus:border-[#0969da] focus:shadow-[0_0_0_3px_rgba(9,105,218,0.3)] focus:outline-none"
            />

            <div className="mb-2 flex items-baseline justify-between">
              <label htmlFor="password" className="text-sm font-semibold text-[#1f2328]">
                Password
              </label>
              <a href="#" className="text-xs text-[#0969da] hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mb-4 h-8 w-full rounded-md border border-[#d1d9e0] bg-white px-3 py-[5px] text-sm text-[#1f2328] shadow-[inset_0_1px_0_rgba(208,215,222,0.2)] transition-shadow focus:border-[#0969da] focus:shadow-[0_0_0_3px_rgba(9,105,218,0.3)] focus:outline-none"
            />

            <button
              type="submit"
              className="h-8 w-full rounded-md border border-[rgba(31,35,40,0.15)] bg-gradient-to-b from-[#2da44e] to-[#2c974b] text-sm font-medium text-white shadow-[0_1px_0_rgba(31,35,40,0.1),inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors hover:from-[#2c974b] hover:to-[#298e46] focus:outline-none focus-visible:shadow-[0_0_0_3px_rgba(9,105,218,0.3)] active:from-[#298e46] active:to-[#298e46]"
            >
              Sign in
            </button>
          </form>

          <button
            type="button"
            className="mt-4 h-8 w-full rounded-md border border-[rgba(31,35,40,0.15)] bg-gradient-to-b from-[#f6f8fa] to-[#f3f4f6] text-sm font-medium text-[#1f2328] shadow-[0_1px_0_rgba(31,35,40,0.04),inset_0_1px_0_rgba(255,255,255,0.25)] transition-colors hover:from-[#f3f4f6] hover:to-[#eceef1] focus:outline-none focus-visible:shadow-[0_0_0_3px_rgba(9,105,218,0.3)] active:from-[#eceef1] active:to-[#eceef1]"
          >
            Sign in with a passkey
          </button>
        </div>

        <div className="mt-4 w-full max-w-[340px] rounded-md border border-[#d1d9e0] bg-white p-4 text-center text-sm text-[#1f2328] shadow-[0_1px_0_rgba(31,35,40,0.04)]">
          New to GitHub?{' '}
          <a href="#" className="text-[#0969da] hover:underline">
            Create an account
          </a>
        </div>
      </main>

      <footer className="px-4 pb-6 pt-8">
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#656d76]">
          {footerLinks.map((label) => (
            <a key={label} href="#" className="text-[#0969da] hover:underline">
              {label}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
