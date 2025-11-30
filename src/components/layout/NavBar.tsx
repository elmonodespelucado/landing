import { NavLink } from '../ui/NavLink';
import { Logo } from '../Logo';
import headerStyle from '../../styles/Header.module.css';
const styles = {
  socialLinks: 'flex flex-col items-end md:flex-row gap-2 p-2',
};
export function NavBar() {
  return (
    <nav className="grid grid-cols-3 items-center justify-center relative min-h-40">
      <div className="px-4 ">
        <div className="hidden sm:flex flex-col sm:flex-row gap-1 sm:gap-5 items-end justify-center sm:justify-end">
          <NavLink>Arte</NavLink>
          <NavLink>Desarrollo</NavLink>
        </div>
        <div className=" sm:hidden">
          <NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </NavLink>
        </div>
      </div>

      <div className={`${headerStyle.logoApp} flex justify-center`}>
        <Logo />
      </div>
      <div className=" px-4 text-sm md:text-base max-w-md">
        <div className={`${styles.socialLinks}`}>
          <NavLink target="_blank" href="https://www.tiktok.com/@elmonodespelucado">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
            </svg>
          </NavLink>
          <NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </NavLink>
          <NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
