type NavLinkProps = { children: React.ReactNode; href?: string; target?: string };

export function NavLink({ href = '#', target = '_self', children }: NavLinkProps) {
  return (
    <a
      href={href}
      target={target}
      className="text-gray-800 hover:text-primary active:text-primary-700 text-md sm:text-lg transition-colors duration-700"
    >
      {children}
    </a>
  );
}
