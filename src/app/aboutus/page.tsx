import Image from "next/image";

export default function AboutUs() {
    return (
        <div>
            <Image src="/images/aboutus-jumbotron.png" alt="background" width={3000} height={3000} objectFit="cover" />
        </div>
    );
}
