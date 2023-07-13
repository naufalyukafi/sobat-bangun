import React from "react";
import Card from "../../atoms/Card";
import Image from "next/image";
import LogoOmah from "../../../../public/images/logo-omah.png";
import Stack from "../../atoms/Stack";
import { FaCheck } from "react-icons/fa";
import Divider from "../../atoms/Divider";
import IconFeature from "../../atoms/IconFeature";
import Dimensi from "../../../../public/images/icons/dimensi.png";
import LuasBangunan from "../../../../public/images/icons/luas-bangunan.png";
import Lantai from "../../../../public/images/icons/lantai.png";
import KamarTidur from "../../../../public/images/icons/kamar-tidur.png";

const PriceRoomCard: React.FC = () => {
  return (
    <Card>
      <h2 className="my-2 font-semibold text-2xl">Omah Apik 3</h2>
      <div className="flex align-middle gap-2">
        <Image src={LogoOmah} alt="Omah Apik" />
        <p className="text-sm">Studio SAe</p>
      </div>
      <div className="mt-2">
        <Stack gap={6}>
          <p className="text-grey-300">Jenis Rumah</p>
          <p>Scandinavian</p>
        </Stack>
        <Stack gap={6}>
          <p className="text-grey-300">Tipe Desain</p>
          <Stack gap={2}>
            <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center">
              <FaCheck className="text-white" />
            </div>
            <p className="text-primary-700">Dapat Dimodifikasi</p>
          </Stack>
        </Stack>
        <Divider />
        <Stack gap={6}>
          <IconFeature
            imageSrc={Dimensi}
            title="Dimensi Tanah"
            description="15 x 8m"
          />
          <IconFeature
            imageSrc={LuasBangunan}
            title="Luas Bangunan"
            description="112m2"
          />
          <IconFeature imageSrc={Lantai} title="Lantai" description="2" />
          <IconFeature
            imageSrc={KamarTidur}
            title="Kamar Tidur"
            description="4"
          />
        </Stack>
        <Divider />
        <p className="text-sm">Harga Desain</p>
        <h3 className="text-3xl">Rp. 32.500.000</h3>
        <span className="text-sm text-gray-500">
          Harga konstruksi mulai dari Rp 560.000.000
        </span>

        <button
          type="button"
          className="text-white w-full bg-primary-700 font-medium rounded-lg text-sm px-4 py-4 text-center mt-3 mr-3 md:mr-0  dark:hover:bg-primary-700"
        >
          Konsultasi Sekarang
        </button>
      </div>
    </Card>
  );
};

export default PriceRoomCard;
