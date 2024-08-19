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
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%230400ff&color2=%23000000&color3=%233112e1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>

      <main className="w-screen mx-auto min-h-screen">
        <div className="w-2/3 mx-auto text-5xl font-bold py-48 flex flex-col space-y-4">
          <div className="h-[500px] flex flex-col space-y-6">
            <p>Welcome to HelpHack.</p>
            <p>
              We empower students&apos; future <br />
              directly through software
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
                <Link href="https://www.spaceappssby.xyz/">
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
          <p id="project">projects </p>
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
                <Link href="https://www.olimguide.com/">
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
        </div>
      </main>
    </div>
  );
}
