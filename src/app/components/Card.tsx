import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: Props) => {
  return (
    <div className="w-[250px] h-[400px] gap-10 p-2 lg:w-[450px] lg:h-[650px]  border-2 rounded-xl flex-shrink-0 lg:p-5 flex items-start justify-start lg:gap-20 flex-col">
      <div>
        <Image
          src={image}
          alt=""
          width={100}
          height={100}
          className="rounded-xl w-10 h-10 lg:w-20 lg:h-20"
        />
        <h2 className="text-white font-monument font-regular uppercase text-sm lg:text-3xl mt-5 ">
          {title}
        </h2>
      </div>
      <p className="text-white font-machina font-regular text-xs lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default Card;
