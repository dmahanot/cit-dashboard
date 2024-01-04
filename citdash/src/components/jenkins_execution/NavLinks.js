import {
  HomeIcon,
  DocumentDuplicateIcon,
  CloudIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'GCP', href: 'gcp', icon: CloudIcon },
  { name: 'ONPREM', href: 'onprem', icon: CommandLineIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex w-full justify-center gap-2 rounded-md bg-gray-50 px-3 py-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 shadow-sm ring-1 ring-inset ring-gray-300">
            <DocumentDuplicateIcon className='h-6 w-6' />
            ANF
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="anf_sanity"
                    className={classNames(
                      active ? 'bg-gray-100 text-sky-600' : 'text-gray-700',
                      'block px-4 py-2 text-base'
                    )}
                  >
                    Sanity
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="anf_crr"
                    className={classNames(
                      active ? 'bg-gray-100 text-sky-600' : 'text-gray-700',
                      'block px-4 py-2 text-base'
                    )}
                  >
                    CRR
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

    </>
  );
}