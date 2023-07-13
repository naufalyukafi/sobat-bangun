// pages/index.tsx
import React from "react";
import LandingPageTemplate from "./components/templates/landingpagetemplate";
import Hero from "./components/molecules/hero";
import RoomCard from "./components/molecules/room";
import Testimony from "./components/molecules/testimony";

export default function Home() {
  return (
    <LandingPageTemplate>
      <Hero />
      <main className="bg-white p-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-9">
            <div className="flex items-center justify-between mt-12 mb-4 flex-wrap gap-6">
              <div>
                <h1 className="text-3xl font-bold text-primary">
                  Tampilan Rumah
                </h1>
                <hr className="w-14 border-2 mt-3 border-warning bg-warning" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
              <RoomCard />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3 mt-12">
            <div className="grid grid-cols-1">
              <RoomCard />
              <h1 className="text-3xl font-bold text-primary mt-8">
                Testimoni
              </h1>
              <div className="gap-6 mt-5">
                <Testimony />
                <Testimony />
                <Testimony />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LandingPageTemplate>
  );
}
