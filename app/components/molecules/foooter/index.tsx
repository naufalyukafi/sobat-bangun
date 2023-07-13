import React from "react";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import BlackLogo from "@/public/images/black-logo.png";
import SIGLogo from "@/public/images/logo-sig.png";
import Mandiri from "@/public/images/mandiri.png";
import BNI from "@/public/images/bni.png";
import BTN from "@/public/images/btn.png";
import BRI from "@/public/images/bri.png";
import CC from "@/public/images/cc.png";
import JCB from "@/public/images/jcb.png";
import Permata from "@/public/images/permata.png";
import VISA from "@/public/images/visa.png";
import ASCO from "@/public/images/asco.png";
import ADIDAYA from "@/public/images/adidaya.png";
import AGRA from "@/public/images/agra.png";
import INECO from "@/public/images/ineco.png";

const Footer = () => {
  return (
    <footer className="bg-grey-900 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image src={BlackLogo} alt="Sobat Bangun" />
            </a>
            <p className="text-white my-4 max-w-2xl">
              SobatBangun adalah platform digital dari SIG yang bergerak dengan
              misi mengembangkan proses pembangunan dan renovasi rumah secara
              lebih baik serta berkelanjutan.
            </p>
            <div className="flex items-center text-base text-white mb-4">
              <FiMail className="mr-4" />
              <span>sobat@sobatbangun.com</span>
            </div>
            <p className="text-white text-base my-8">Sosial Media :</p>
            <div className="flex items-center text-white">
              <a
                href="#"
                className="mr-2 bg-white hover:text-white text-black hover:bg-grey-1000 rounded-full p-3"
              >
                <FaInstagram fontSize={25} />
              </a>
              <a
                href="#"
                className="mr-2 text-black hover:text-white bg-white hover:bg-grey-1000 rounded-full p-3"
              >
                <FaFacebook fontSize={25} />
              </a>
              <a
                href="#"
                className="bg-white text-black hover:text-white hover:bg-grey-1000 rounded-full p-3"
              >
                <FaYoutube fontSize={25} />
              </a>
            </div>
          </div>
          <div className="md:flex md:justify-between gap-16">
            <div>
              <h2 className="mb-6 text-xl font-bold text-white uppercase ">
                Produk & Layanan
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-2 flex items-center text-white">
                  <a href="#">Renovasi</a>
                </li>
                <li className="mb-2 flex items-center text-white">
                  <a href="#">Bangun Rumah</a>
                </li>
                <li className="mb-2 flex items-center text-white">
                  <a href="#">Layanan Desain</a>
                </li>
                <li className="mb-2 flex items-center text-white">
                  <a href="#">Teknologi Tambahan</a>
                </li>
                <li className="mb-2 flex items-center text-white">
                  <a href="#">Beli Material</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold text-white uppercase">
                Tentang Kami
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2 text-white">
                  <a href="#">Tentang SobatBangun</a>
                </li>
                <li className="mb-2 text-white">
                  <a href="#">Kebijakan Dan Privasi</a>
                </li>
                <li className="mb-2 text-white">
                  <a href="#">Syarat Dan Ketentuan</a>
                </li>
                <li className="mb-2 text-white">
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Daftar Menjadi Mitra
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between my-4">
          <div>
            <h2 className="mt-6 text-xl font-bold text-white ">
              Kredit Bangun Rumah
            </h2>
            <div className="flex items-center gap-4">
              <Image src={Mandiri} alt="Mandiri" />
              <Image src={BTN} alt="BTN" />
              <Image src={BNI} alt="BNI" />
            </div>
          </div>

          <div>
            <h2 className="mt-6 text-xl font-bold text-white ">
              Tunai Via Bank Transfer
            </h2>
            <div className="flex items-center gap-4">
              <Image src={Mandiri} alt="Mandiri" />
              <Image src={BRI} alt="BRI" />
              <Image src={BNI} alt="BNI" />
              <Image src={Permata} alt="Permata" />
            </div>
          </div>

          <div>
            <h2 className="mt-6 text-xl font-bold text-white ">Kartu Kredit</h2>
            <div className="flex items-center gap-4">
              <Image src={VISA} alt="Visa" />
              <Image src={CC} alt="CC" />
              <Image src={JCB} alt="JCB" />
            </div>
          </div>

          <div>
            <h2 className="mt-6 text-xl font-bold text-white ">
              Rekan Teknologi Tambahan
            </h2>
            <div className="flex items-center gap-4">
              <Image src={ASCO} alt="Asco" />
              <Image src={INECO} alt="INECO" />
              <Image src={ADIDAYA} alt="ADIDAYA" />
              <Image src={AGRA} alt="AGRA" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="flex gap-5 items-center">
            <h2 className="text-white text-base">Powered by: </h2>
            <Image src={SIGLogo} alt="sig" />
          </div>
          <div>
            <p className="text-white mt-2 md:mt-0">
              Copyright © 2023 SobatBangun. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
