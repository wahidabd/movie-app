import React, {ReactNode} from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrimaryLayout = ({children}: {children: ReactNode}) => {
    return (
        <main>
            <Header/>
            <div className="py-10 pb-20">{children}</div>
            <Footer/>
        </main>
    );
};

export default PrimaryLayout;