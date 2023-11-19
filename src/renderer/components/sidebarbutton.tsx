import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SidebarButtonProps {
  href: string;
  children: ReactNode;
}

function SidebarButton({ href, children }: SidebarButtonProps) {
  return (
    <Link to={href} className="text-white text-2xl font-bold">
      {children}
    </Link>
  );
}

export default SidebarButton;
