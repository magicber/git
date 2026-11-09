import { useState, type FormEvent } from 'react';

const footerLinks = [
  'Sign up', 'Log in', 'Messenger', 'Facebook Lite', 'Video', 'Places', 'Games', 'Marketplace',
  'Meta Pay', 'Meta Store', 'Meta Quest', 'Instagram', 'Threads', 'Fundraisers', 'Services',
  'Voting Information Centre', 'Groups', 'About', 'Create ad', 'Create Page', 'Developers',
  'Careers', 'Privacy', 'Cookies', 'AdChoices', 'Terms', 'Help', 'Contact uploading and non-users', 'Settings',
];

export default function FacebookLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f0f2f5] text-[#1c1e21] antialiased">
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-8 sm:py-12 lg:flex-row lg:items-center lg:justify-center lg:gap-32 lg:px-8">
        <section className="flex w-full max-w-[500px] flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-[clamp(44px,13vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#1877f2] lg:text-[108px] lg:leading-none">
            facebook
          </h1>
          <p className="mt-4 max-w-[500px] text-2xl leading-8 text-[#1c1e21] lg:mt-4 lg:text-[28px] lg:leading-9">
            Facebook helps you connect and share with the people in your life.
          </p>
        </section>

        <section className="w-full max-w-[396px]">
          <div className="rounded-lg bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="email"
                aria-label="Email address or phone number"
                placeholder="Email address or phone number"
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                autoFocus
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-[52px] w-full rounded-md border border-[#dddfe2] bg-white px-4 text-[17px] text-[#1c1e21] placeholder:text-[#8d949e] focus:border-[#1877f2] focus:shadow-[0_0_0_2px_rgba(24,119,242,0.2)] focus:outline-none"
              />
              <input
                type="password"
                name="pass"
                aria-label="Password"
                placeholder="Password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-[52px] w-full rounded-md border border-[#dddfe2] bg-white px-4 text-[17px] text-[#1c1e21] placeholder:text-[#8d949e] focus:border-[#1877f2] focus:shadow-[0_0_0_2px_rgba(24,119,242,0.2)] focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 w-full rounded-md bg-[#1877f2] text-xl font-bold text-white transition-colors hover:bg-[#166fe5] active:bg-[#1864cc] focus:outline-none focus-visible:shadow-[0_0_0_2px_rgba(24,119,242,0.4)]"
              >
                Log in
              </button>
            </form>

            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-[#1877f2] hover:underline">
                Forgotten password?
              </a>
            </div>

            <div className="my-5 border-t border-[#dadde1]" />

            <div className="flex justify-center">
              <button
                type="button"
                className="h-12 w-full rounded-md bg-[#42b72a] px-4 text-[17px] font-bold sm:w-auto text-white transition-colors hover:bg-[#36a420] active:bg-[#2f8f1f] focus:outline-none focus-visible:shadow-[0_0_0_2px_rgba(66,183,42,0.4)]"
              >
                Create new account
              </button>
            </div>
          </div>

          <p className="mt-7 text-center text-sm text-[#1c1e21]">
            <a href="#" className="font-bold text-[#1c1e21] hover:underline">
              Create a Page
            </a>{' '}
            for a celebrity, brand or business.
          </p>
        </section>
      </main>

      <footer className="px-4 pb-6 pt-4 lg:px-8">
        <nav aria-label="Footer" className="mx-auto max-w-[980px]">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#616770]">
            {footerLinks.map((label) => (
              <li key={label}>
                <a href="#" className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-[#616770]">Meta © 2026</p>
        </nav>
      </footer>
    </div>
  );
}
