// pages/index.tsx
import React from "react";
import LandingPageTemplate from "./components/templates/landingpagetemplate";
import Hero from "./components/molecules/hero";
import RoomCard from "./components/molecules/room";
import Testimony from "./components/molecules/testimony";
import PriceRoomCard from "./components/molecules/priceroom";
import PriceRoomCardDetail from "./components/molecules/priceroomdetail";

export default function Home() {
  return (
    <LandingPageTemplate>
      <Hero />
      <main className="bg-white p-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-6">
              <h1 className="text-3xl font-bold text-primary">
                Tampilan Rumah
              </h1>
            </div>
            <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="grid grid-cols-1 gap-6">
              <PriceRoomCard />
              <h1 className="text-3xl font-bold text-primary mt-8">
                Testimoni
              </h1>
              <div className="grid gap-6 mt-5">
                <Testimony />
                <Testimony />
                <Testimony />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Desain Lainnya oleh Studio SAe
          </h1>
          <div className="min-w-full grid grid-cols-1 md:grid-cols-4 gap-2 mt-8">
            <PriceRoomCardDetail />
            <PriceRoomCardDetail />
            <PriceRoomCardDetail />
            <PriceRoomCardDetail />
            <PriceRoomCardDetail />
          </div>
        </div>
      </main>
    </LandingPageTemplate>
  );
}
