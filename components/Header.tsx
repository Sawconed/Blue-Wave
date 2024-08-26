import Image from "next/image";
import Link from "next/link";

const Header = () => (
    <div className="flex flex-row justify-between items-center h-16 px-28 bg-gradient-to-b from-main-dark to-main-light">
        <Link href="/" className="basis-1/3">
            <Image src="/icons/logo.png" width={100} height={100} alt="Blue Wave logo" className="h-24" />
        </Link>

        <ul className="flex flex-row justify-between items-center font-bold text-white">
            <li className="mx-16 hover:text-sub-light">
                <Link href="/">TRANG CHỦ</Link>
            </li>
            <li className="mx-16 hover:text-sub-light">
                <Link href="/aboutus">VỀ CHÚNG TÔI</Link>
            </li>
            <li className="mx-16 hover:text-sub-light">
                <Link href="/contact">LIÊN HỆ</Link>
            </li>
        </ul>

        <div>Search bar</div>
    </div>
);

export default Header;
