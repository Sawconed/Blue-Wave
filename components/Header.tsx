import Image from "next/image";
import Link from "next/link";

const Header = () => (
    <div className="flex flex-row justify-between items-center h-16 px-[2%] md:px-28 bg-gradient-to-b from-main-dark to-main-light">
        <Link href="/" className="sm:basis-2/12 md:basis-1/3">
            <Image src="/icons/logo.png" width={100} height={100} alt="Blue Wave logo" className="h-24" />
        </Link>

        <ul className="hidden md:flex flex-row justify-between items-center font-bold text-white sm:text-[1.8vw] md:text-[1.5vw] lg:text-[max(1vw,80%)] mr-3">
            <li className="hover:text-sub-light">
                <Link href="/">TRANG CHỦ</Link>
            </li>
            <li className="hover:text-sub-light px-[3vw] lg:px-[5vw]">
                <Link href="/aboutus">VỀ CHÚNG TÔI</Link>
            </li>
            <li className="hover:text-sub-light">
                <Link href="/contact">LIÊN HỆ</Link>
            </li>
        </ul>

        <div>Search bar</div>
    </div>
);

export default Header;
