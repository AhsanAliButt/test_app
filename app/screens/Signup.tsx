import Image from "next/image";

const Signup = () => {
  return (
    <>
      <section className="sm:block bg-signup-bg pt-[180px] pb-[70px]">
        <div className="px-[30px] lg:max-w-[1512px] gap-[25px] mx-auto flex flex-col lg:flex-row">
          <div className="rounded-[50px] p-[25px] bg-white">
            <div
              className="rounded-[25px] 
             p-10 sm:p-[100px] 
            
            bg-primary flex items-center justify-center lg:content-center"
            >
              <div className="space-y-[30px]">
                <img src={"/signup-qr.svg"} className="" alt="Signup QR Code" />
                <h3 className="font-medium text-white text-3xl md:text-[45px] text-center">
                  Sign Up
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-1 pr-[63px] bg-white rounded-[25px] items-center ">
            <Image
              className="scale-[1.6] -translate-x-7 translate-y-6"
              src={"/signup-ladies.svg"}
              width={220}
              height={220}
              alt="Signup QR Code"
            />
            <h2 className="mt-28 md:mt-0 md:text-[22px] w-[100%] xl:text-[30px] ml-9 xl:ml-auto md:max-w-[522px] leading-[40px]">
              <span className="text-primary-dark font-bold">Sign up today</span>{" "}
              and manage your portfolio like a pro with personalized assistant
              and access to a trusted tech community of 1,200 members who
              connected $150M+ of total assets.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
