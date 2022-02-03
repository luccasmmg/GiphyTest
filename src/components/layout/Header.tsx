import * as React from 'react';
import UnstyledLink from '../links/UnstyledLink';

//import UnstyledLink from '../components/links/UnstyledLink';

const links = [
  { href: '/page_1', label: 'Route 1' },
  { href: '/page_2', label: 'Route 2' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map((link) => (
              <li key={`${link.href}${link.label}`}>
                <UnstyledLink href={link.href} className='hover:text-gray-600'>
                  {link.label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
