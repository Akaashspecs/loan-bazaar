import Link from "next/link";
import MessageTab from "./message";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0f1a2a] px-5 py-10 md:p-10  ">
        <div className="  max-w-[1600px] mx-auto mb-[50px] ">
          <div className="text-white/75 text-[13px]   grid-cols-2 md:grid-cols-4 gap-5 hidden sm:grid">
            <div className="max-w-[320px]">
              <div className="text-[14.5px] text-white">About Us</div>
              <div>
                LOAN BAZAR was established in 2023 with a mission to promote
                rural development, financial inclusion, and women empowerment
                across India. the organization is committed to supporting
                economically weaker sections in rural and semi-urban areas.
              </div>
            </div>

            <div className="pl-6 md:pl-6">
              <div className="text-[14.5px] text-white ">Useful Links</div>
              <div className="flex flex-col gap-1 ">
                <Link href={"/"} className="mt-2 w-fit">
                  Home
                </Link>
                <Link href={"/about"} className="w-fit">
                  About Us
                </Link>
                <Link href={"/privacy-policy"} className="w-fit">
                  Privacy Policy
                </Link>
                <Link href={"/terms-and-conditions"} className="w-fit">
                  Terms And Conditions{" "}
                </Link>
                <Link href={"/partner"} className="w-fit">
                  Become a partner
                </Link>
              </div>
            </div>
            <div className=" max-w-[280px]  md:max-w-[320px]">
              <div className="text-[14.5px] text-white">Register Office</div>
              <div>
                Address: Bala Ji Complex, Balliwala Chowk, G.M.S. Road,
                Dehradun, Uttarakhand 248001 Email: contact@loan-bazar.in
              </div>
            </div>

            <div className="pl-6 md:pl-0">
              <div>
                <div className="text-[14.5px] text-white">Contact Us</div>

                {/* <IoLogoWhatsapp
                  onClick={() => openWhatsApp()}
                  className=" text-white rounded-full p-1 bg-green-500 text-[35px] cursor-pointer mt-1"
                /> */}
                <div>
                  <div>Contact: +91 8193939072</div>
                </div>
                <div className="lg:hidden block">
                  <div className=" my-2">Download Our App:</div>
                  <a
                    href="/app-release.apk"
                    className="bg-blue-500 w-fit  px-2 py-1 rounded-sm "
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="text-white/75 text-[13px]   gap-5 flex flex-col sm:hidden">
            <div className="flex w-full gap-3">
              <div className=" justify-between  ">
                <div className="text-[14.5px] text-white ">Useful Links</div>
                <div className="flex flex-col gap-1 ">
                  <Link href={"/"} className="mt-2">
                    Home
                  </Link>
                  <Link href={"/about"}>About Us</Link>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                  <Link href={"/terms-and-conditions"}>
                    Terms And Conditions{" "}
                  </Link>
                  <Link href={"/partner"}>Become a partner</Link>
                </div>
              </div>
              <div className="grow flex-1 flex justify-end">
                <div>
                  <div className="text-[14.5px] text-white mb-2">
                    Download Our App:
                  </div>
                  <a
                    href="/app-release.apk"
                    className="bg-blue-500 w-fit px-2 py-1 rounded-sm "
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <div className="text-[14.5px] text-white">About Us</div>
              <div className="w-full">
                LOAN BAZAR was established in 2023 with a mission to promote
                rural development, financial inclusion, and women empowerment
                across India. the organization is committed to supporting
                economically weaker sections in rural and semi-urban areas.
              </div>
            </div>
            <div>
              <div className="text-[14.5px] text-white">Contact Us</div>

              {/* <IoLogoWhatsapp
                    onClick={() => openWhatsApp()}
                    className=" text-white rounded-full p-1 bg-green-500 text-[35px] cursor-pointer mt-1"
                  /> */}
              <div>
                <div>Contact: +91 8193939072</div>
              </div>
            </div>

            <div className="w-full">
              <div className="text-[14.5px] text-white">Register Office</div>
              <div>
                Address: Bala Ji Complex, Balliwala Chowk, G.M.S. Road,
                Dehradun, Uttarakhand 248001 Email: contact@loan-bazar.in
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-[12px] px-3 text-gray-500 max-w-[1600px] w-full mx-auto  bg-white">
        © 2025 <span className="font-semibold">Loan Bazar</span>. All rights
        reserved
      </div>
      <MessageTab />
    </div>
  );
};

export default Footer;
