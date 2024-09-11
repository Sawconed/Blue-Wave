import Image from "next/image";
import CustomButton from "../../../components/CustomButton";
import AboutUsCard from "../../../components/AboutUsCard";
import TranslatedView from "../../../components/TranslateView";

const CardContext = [
    {
        title: "Truyền Thông",
        description: "Tăng cường công tác tuyên truyền về sự cấp bách của môi trường biển",
        icon: "/icons/communication.svg",
    },
    {
        title: "Gây Quỹ",
        description: "Tổ chức các chiến dịch gây quỹ, kêu gọi quyên góp cho chiến dịch",
        icon: "/icons/fundraising.svg",
    },
    {
        title: "Giáo Dục",
        description: "Cung cấp kiến thức cần thiết về những loài sinh vật biển quý hiếm",
        icon: "/icons/education.svg",
    },
];

export default function AboutUs() {
    return (
        <>
            <div className="relative">
                <Image src="/images/aboutus-jumbotron.png" alt="background" width={3000} height={3000} objectFit="cover" />

                <TranslatedView
                    direction="scale down"
                    className="absolute bottom-[1.5vw] h-full w-full flex flex-col justify-center items-center  text-center text-white"
                >
                    <h1 className="font-extrabold text-[5vw]">BLUE WAVE</h1>
                    <p className="text-[1vw] w-[45em]">
                        The Endangered Marine Species Protection Campaign is a non-profit initiative focused on raising awareness and
                        promoting action to protect marine species at risk of extinction.
                    </p>
                    <CustomButton title="Xem Thêm" href="/" size="lg" className="mt-10" />
                </TranslatedView>

                <div className="absolute -bottom-[8vw] w-full">
                    <div className="flex flex-row justify-center gap-[5vw]">
                        {CardContext.map((card, index) => (
                            <TranslatedView key={index} direction="down" delay={index * 0.3}>
                                <AboutUsCard title={card.title} description={card.description} icon={card.icon} />
                            </TranslatedView>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-[6vw] items-center mx-[7vw] mt-[24vw] mb-[12vw] lg:mx-36 lg:mb-36">
                <div className="grid grid-cols-2 gap-[1.5vw] w-[60%]">
                    <TranslatedView direction="down" delay={0.3}>
                        <Image src="/images/seahorse-aboutus.png" alt="" width={500} height={500} />
                    </TranslatedView>
                    <TranslatedView direction="down" delay={0.5}>
                        <Image src="/images/dolphin-aboutus.png" alt="" width={500} height={500} />
                    </TranslatedView>
                    <TranslatedView direction="left" delay={0.7} className="col-span-2">
                        <Image src="/images/turtle-aboutus.png" alt="" width={1000} height={500} />
                    </TranslatedView>
                </div>
                <TranslatedView direction="scale up" delay={0.5} className="w-[40%]">
                    <h2 className="font-bold text-[1.2vw]">Thành lập 2024</h2>
                    <h1 className="font-semibold text-sub-light text-[2.8vw] drop-shadow-md my-[1vw]">
                        CHIẾN DỊCH
                        <br />
                        <b>BLUE WAVE</b>
                    </h1>
                    <div className="leading-relaxed text-justify text-[1vw]">
                        <p>
                            Chiến dịch <b>Bluewave</b> được khởi xướng với mục tiêu nâng cao nhận thức cộng đồng về tầm quan trọng của các
                            loài sinh vật biển đang có nguy cơ tuyệt chủng{" "}
                        </p>
                        <p className="my-[1vw]">
                            Là một dự án phi lợi nhuận, Bluewave tập trung vào việc truyền tải thông điệp bảo tồn biển thông qua các hoạt
                            động giáo dục và giải trí. Các hoạt động chính bao gồm tổ chức hội thảo, workshop làm đồ handmade từ vật liệu
                            tái chế.
                        </p>
                        <p>
                            Ngoài ra Bluewave còn xây dựng nội dung truyền thông sáng tạo trên các nền tảng số như Facebook và TikTok.
                            Bluewave không chỉ nhằm mục đích nâng cao nhận thức mà còn thúc đẩy hành động thực tế trong việc bảo vệ hệ sinh
                            thái biển.
                        </p>
                    </div>
                </TranslatedView>
            </div>

            <div className="relative">
                <Image src="/images/aboutus-panel.png" alt="a" width={3000} height={800} />
                <TranslatedView
                    direction="right"
                    className="absolute right-[5vw] top-[4vw] text-center w-[35vw] h-full text-bluewave-light"
                >
                    <h1 className="italic text-[2.5vw] font-semibold mb-3">&quot;Ripples Of Hope&quot;</h1>
                    <h3 className="text-[0.8vw]">
                        Những gợn sóng hy vọng từ đại dương, mang theo lời thì thầm của biển cả, đánh thức trái tim con người về sứ mệnh giữ
                        gìn và bảo vệ những sinh vật biển quý giá.
                    </h3>
                </TranslatedView>
            </div>

            <div></div>
        </>
    );
}
