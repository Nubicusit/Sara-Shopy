import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[250px] lg:h-[350px] hidden sm:hidden md:hidden lg:block">
      {/* Background Image */}
      <Image
        src="/img/banner/banner8.jpeg"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
    </div>
  );
};

export default Banner;
