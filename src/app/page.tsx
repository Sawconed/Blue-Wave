import Image from "next/image";
import CustomButton from "../../components/CustomButton";
import { species } from "../../constants";
import CustomCard from "../../components/CustomCard";
import * as motion from "framer-motion/client";
import TranslatedView from "../../components/TranslateView";

export default function Home() {
    return (
        <>
            <div className="relative">
                <Image src="/images/home-jumbotron.png" alt="background" width={3000} height={3000} objectFit="cover" />
                <div className="absolute z-10 top-1/3 left-36 text-white w-2/4">
                    <TranslatedView direction="left">
                        <h1 className="text-8xl font-semibold">RIPPLE OF HOPE</h1>
                    </TranslatedView>

                    <TranslatedView className="text-wrap my-7 w-3/4" direction="left" delay={0.3}>
                        Cùng bước vào hành trình của <b>Bluewave</b>, nơi những câu chuyện về đại dương và các sinh vật biển quý hiếm được
                        viết nên. Hãy cùng chúng tôi lan tỏa yêu thương, bảo vệ vẻ đẹp kỳ diệu của biển cả.
                    </TranslatedView>

                    <TranslatedView direction="left" delay={0.6}>
                        <CustomButton href="/" title="Tìm Hiểu" />
                    </TranslatedView>
                </div>
            </div>

            <div className="px-36 my-36">
                <div className="flex flex-row items-end justify-between text-wrap">
                    <TranslatedView className="flex flex-col justify-between gap-10 w-1/3 pb-4" direction="left">
                        <h2 className="uppercase font-bold text-2xl">KHÁM PHÁ biển xanh</h2>
                        <h1 className="text-5xl font-semibold text-sub-light drop-shadow-md">BÒ BIỂN DUGONG</h1>
                        <p className="border-l-2 border-sub-dark pl-4">
                            Bò biển sống ở các vùng biển cạn, ấm áp tại Đông Nam Á, Australia, và Ấn Độ Dương. Chúng thường được tìm thấy ở
                            các khu vực có cỏ biển phong phú, như các vịnh, đầm phá, và cửa sông.
                        </p>
                        <span>
                            <CustomButton href="/" title="Tìm Hiểu" className="shadow-md-offset" />
                        </span>
                    </TranslatedView>

                    <TranslatedView className="rounded-3xl overflow-hidden shadow-3xl-offset" direction="right">
                        <Image src="/images/dugong.png" alt="dugong" width={800} height={800} objectFit="cover" />
                    </TranslatedView>
                </div>

                <div className="flex flex-wrap items-center mt-28">
                    {species.map((sp, i) => (
                        <TranslatedView
                            key={sp.id}
                            className="rounded-2xl slider shadow-md-offset aspect-square relative w-1/6 m-5"
                            direction="down"
                            delay={i * 0.3}
                        >
                            <CustomCard species={sp} href={`species/${sp.id}`} />
                        </TranslatedView>
                    ))}
                </div>

                <div className="flex flex-row justify-center mt-20">
                    <CustomButton href="/" title="Xem Thêm" size="sm" />
                </div>
            </div>
        </>
    );
}
