"use client";

import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/Search";
import classNames from "classnames";

const mainNav = [
    {label: "Popular", route: '/', exact: true},
    {label: "Top Rated", route: '/top-rated'},
    {label: "Upcoming", route: '/upcoming',}
]

const Header = () => {
    const pathname = usePathname();
    return (
        <header>
            <nav className='max-w-5xl mx-auto py-2 flex items-center justify-between px-4 md:px-0'>
                <Link href='/'>
                    <Image src='/logo.png' alt='logo' height={45} width={45}/>
                </Link>
                <div className="md:w-2/5">
                    <Search/>
                </div>

                <ul className='grid grid-cols-3 gap-4'>
                    {mainNav.map((i) => (
                        <li key={i.route}>
                            <Link
                                className={classNames(
                                    "text-gray-400 font-bold hover:text-white transition-color",
                                    {
                                        "!text-white": i.exact
                                            ? pathname === i.route
                                            : pathname.startsWith(i.route),
                                    }
                                )}
                                href={i.route}>
                                {i.label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    );
};

export default Header;