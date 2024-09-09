import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <>
            <div className="relative">
                <Image src="/images/contact-jumbotron.png" alt="background" width={3000} height={3000} objectFit="cover" className="-z-0" />

                <div className="absolute top-0 h-full w-full flex flex-col justify-center items-center  text-center text-white">
                    <h1 className="font-extrabold text-8xl">CONTACT US</h1>
                    <h2 className="text-5xl">...</h2>
                    <p className="text-lg mt-10">
                        Liên hệ với chúng tôi để cùng chung tay bảo vệ đại dương và gìn giữ những loài sinh vật biển quý hiếm.
                    </p>
                </div>
            </div>

            <div className="mt-40 mb-56 mx-20">
                <div className="flex flex-row items-center justify-between text-center">
                    <div className="flex flex-col items-center px-14 pt-20 gap-10 border-r-2 border-gray-400">
                        <Image src="/icons/visit.svg" alt="Blue Wave Media" width={100} height={100} />
                        <h1 className="text-[#685A55] font-semibold text-3xl">VISIT US</h1>
                        <p className="text-[#737373]">
                            Hãy ghé thăm các trang mạng xã hội của chúng tôi để tìm hiểu thêm về chiến dịch và tham gia vào các hoạt động
                            bảo vệ môi trường biển.
                        </p>
                        <p className="flex flex-row items-center">
                            <Link href="/" className="mr-4">
                                <Image src="/icons/youtube-sub.svg" width={30} height={30} alt="Youtube Page" />
                            </Link>
                            <Link href="/" className="mr-4">
                                <Image src="/icons/facebook-sub.svg" width={30} height={30} alt="Facebook Page" />
                            </Link>
                            <Link href="/">
                                <Image src="/icons/instagram-sub.svg" width={30} height={30} alt="Instagram Page" />
                            </Link>
                        </p>
                    </div>

                    <div className="flex flex-col items-center px-14 pt-20 gap-10">
                        <Image src="/icons/call.svg" alt="Blue Wave Media" width={100} height={100} />
                        <h1 className="text-[#685A55] font-semibold text-3xl">CALL US</h1>
                        <p className="text-[#737373]">
                            Liên hệ trực tiếp với chúng tôi qua điện thoại để được hỗ trợ và thông tin nhanh chóng về các hoạt động của
                            Bluewave.
                        </p>
                        <p className="text-sub-dark font-bold">(+84)766-829-782</p>
                    </div>

                    <div className="flex flex-col items-center px-14 pt-20 gap-10 border-l-2 border-gray-400">
                        <Image src="/icons/email.svg" alt="Blue Wave Media" width={100} height={100} />
                        <h1 className="text-[#685A55] font-semibold text-3xl">CONTACT US</h1>
                        <p className="text-[#737373]">
                            Gửi email hoặc điền vào form liên hệ để chúng tôi có thể phản hồi và đồng hành cùng bạn trong hành trình bảo vệ
                            đại dương.
                        </p>
                        <p className="text-sub-dark font-bold">bluew5360@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* <div className="sketchfab-embed-wrapper">
                {" "}
                <iframe
                    title="Dugong swimming"
                    width="50%" //
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    src="https://sketchfab.com/models/b8621af0a5854b42b990149dd30ce64b/embed"
                >
                    {" "}
                </iframe>{" "}
                <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}>
                    {" "}
                    <a
                        href="https://sketchfab.com/3d-models/dugong-swimming-b8621af0a5854b42b990149dd30ce64b?utm_medium=embed&utm_campaign=share-popup&utm_content=b8621af0a5854b42b990149dd30ce64b"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                    >
                        {" "}
                        Dugong swimming{" "}
                    </a>{" "}
                    by{" "}
                    <a
                        href="https://sketchfab.com/claudicr9?utm_medium=embed&utm_campaign=share-popup&utm_content=b8621af0a5854b42b990149dd30ce64b"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                    >
                        {" "}
                        Claudia Carceles{" "}
                    </a>{" "}
                    on{" "}
                    <a
                        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=b8621af0a5854b42b990149dd30ce64b"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                    >
                        Sketchfab
                    </a>
                </p>
            </div> */}
        </>
    );
}
