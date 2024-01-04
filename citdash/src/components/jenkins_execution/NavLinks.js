import {
    HomeIcon,
    DocumentDuplicateIcon,
    CloudIcon,
    CommandLineIcon,
  } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
      name: 'ANF',
      href: 'anf',
      icon: DocumentDuplicateIcon,
    },
    { name: 'GCP', href: 'gcp', icon: CloudIcon },
    { name: 'ONPREM', href: 'onprem', icon: CommandLineIcon },
  ];
  
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              to={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }