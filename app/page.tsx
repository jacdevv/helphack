"use client";
import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <ShaderGradientCanvas
        style={{ position: "fixed", width: "100%", height: "100%" }}
        className="-z-10"
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%231921ff&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <nav className="flex justify-between py-4 px-8 fixed w-full top-0 backdrop-blur-xl z-20">
        <div>
          <Image src="/favicon.ico" width="50" height="50" alt="logo" />
        </div>
        <div className="flex gap-5 items-center">
          <p>projects</p>
          <p>hackathons</p>
        </div>
      </nav>
      <main className="w-screen mx-auto min-h-screen">
        <div className="w-2/3 mx-auto text-5xl font-bold py-48 flex flex-col space-y-4">
          <div className="h-[500px] flex flex-col space-y-6">
            <p>
              We empower students&apos; future <br />
              through software
            </p>
            <Link href="#hackathon">
              <Button
                className="w-48 bg-transparent border-white hover:bg-white hover:text-black"
                variant="outline"
              >
                Learn More
              </Button>
            </Link>
          </div>
          <div className="h-16" id="hackathon"></div>
          <p>hackathons </p>
          <div className="grid md:grid-cols-3">
            <Card className="bg-transparent border-white">
              <CardHeader>
                <CardTitle>NASA Space Apps Surabaya</CardTitle>
                <CardDescription className="text-gray-200">
                  Hackathon
                </CardDescription>
              </CardHeader>
              <CardContent className="text-lg">
                <p>IDR 10,000,000 Prize</p>
                <p>5-6 October, 2024</p>
              </CardContent>
              <CardFooter>
                <Link href="/nsac">
                  <Button
                    className="bg-transparent border-white hover:bg-white hover:text-black"
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="h-20"></div>
          <p>projects </p>
          <div className="grid md:grid-cols-3">
            <Card className="bg-transparent border-white">
              <CardHeader>
                <CardTitle>OlimGuide</CardTitle>
                <CardDescription className="text-gray-200">
                  Tutoring
                </CardDescription>
              </CardHeader>
              <CardContent className="text-lg">
                <p>Learn math olympiad for free!</p>
              </CardContent>
              <CardFooter>
                <Link href="https://www.olimguide.com/"></Link>
                <Button
                  className="bg-transparent border-white hover:bg-white hover:text-black"
                  variant="outline"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
