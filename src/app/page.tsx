import Image from "next/image";
import CustomButton from "../../components/CustomButton";

export default function Home() {
    return (
        <div className="relative">
            {/* Create background image using Image from nextjs */}
            <Image src="/images/home-jumbotron.png" alt="background" width={3000} height={3000} objectFit="cover" />
            <div className="absolute z-10 top-1/3 left-36 text-white w-1/3">
                <h1 className="text-7xl font-semibold">RIPPLE OF HOPE</h1>
                <div className="text-wrap my-7">
                    Cùng bước vào hành trình của <b>Bluewave</b>, nơi những câu chuyện về đại dương và các sinh vật biển quý hiếm được viết
                    nên. Hãy cùng chúng tôi lan tỏa yêu thương, bảo vệ vẻ đẹp kỳ diệu của biển cả.
                </div>
                <CustomButton href="/" title="Tìm Hiểu" />
            </div>
        </div>
    );
}
