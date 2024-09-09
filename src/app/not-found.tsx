import React from "react";
import Image from "next/image";
import CustomButton from "../../components/CustomButton";

const NotFound = () => {
    return (
        <div className="relative">
            <Image src="/images/not-found-jumbotron.png" alt="background" width={3000} height={3000} objectFit="cover" />

            <div className="absolute -top-[3vw] left-0 w-full h-full flex flex-col justify-center items-center text-white">
                <p className="font-semibold text-[18vw] text-sub-light drop-shadow-lg">404</p>
                <p className="font-bold uppercase text-[1.2vw]">Trang bạn truy cập không tồn tại</p>
                <p className="text-[1vw] mt-2">Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ</p>
                <CustomButton href="/" title="Quay Về Trang Chủ" size="lg" className="mt-10" />
            </div>
        </div>
    );
};

export default NotFound;
