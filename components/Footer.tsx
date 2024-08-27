import Image from "next/image";
import Link from "next/link";

const Footer = () => (
    <div className="flex flex-row justify-between items-center h-36 bg-gradient-to-t from-main-dark to-main-light px-36 py-6">
        <div className="flex flex-row items-center">
            <Image src="/icons/logo.png" width={200} height={200} alt="Blue Wave logo" className="h-36 pr-10" />

            <div className="flex flex-col border-l-2 border-white py-4 px-10 text-white">
                <ul className="flex flex-row text-sm mb-4">
                    <li className="mr-8 hover:text-sub-hover">
                        <Link href="/">TRANG CHỦ</Link>
                    </li>
                    <li className="mr-8 hover:text-sub-hover">
                        <Link href="/aboutus">VỀ CHÚNG TÔI</Link>
                    </li>
                    <li className="hover:text-sub-hover">
                        <Link href="/contact">LIÊN HỆ</Link>
                    </li>
                </ul>
                Copyright © 2024 Bluewave. All rights reserved.
            </div>
        </div>
        <div className="text-white">
            <div className="flex flex-row items-center mb-4">
                <Link href="/" className="mr-4">
                    <Image src="/icons/youtube.svg" width={30} height={30} alt="Youtube Page" />
                </Link>
                <Link href="/" className="mr-4">
                    <Image src="/icons/facebook.svg" width={30} height={30} alt="Facebook Page" />
                </Link>
                <Link href="/">
                    <Image src="/icons/instagram.svg" width={30} height={30} alt="Instagram Page" />
                </Link>
            </div>
            Support: bluew5360@gmail.com
        </div>
    </div>
);

export default Footer;
