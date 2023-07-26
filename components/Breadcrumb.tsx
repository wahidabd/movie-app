import React, {ReactNode} from 'react';
import Link from "next/link";
import BreadcrumbAnchor from "@/components/BreadcrumbAnchor";

const Breadcrumb = (
    {children}: {children: ReactNode}
) => {
    return (
        <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-2 text-sm font-semibold text-accent-3'>
                <li className="inline-flex items-center" >
                    <Link href='/' className='inline-flex items-center gap-1 text-slat-400 hover:text-slate-200'>
                        Home
                    </Link>
                </li>
                {children}
            </ol>
        </nav>
    );
};


Breadcrumb.displayName = "Breadcrumb"
Breadcrumb.Anchor = BreadcrumbAnchor
export default Breadcrumb;