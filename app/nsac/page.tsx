import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-20 px-4">
      <div className="h-screen flex justify-center items-center flex-col space-y-2 my-2">
        <Image
          src="https://utfs.io/f/61c732c6-2b2a-4a1d-a82b-6349c5710e89-rbcs78.jpg"
          alt="NASA Space Apps Surabaya"
          width="1920"
          height="200"
          className="fixed -z-20 bg-cover opacity-50 w-full h-screen object-cover object-center transform scale-110"
        />

        <div className="text-6xl font-bold text-white text-center pt-12 md:pt-0">
          NASA Space Apps
          <div></div>Surabaya Hackathon
        </div>
        <div className="text-3xl font-semibold text-center">
          Compete for a prize pool of IDR 10,000,000
        </div>
        <div className="bg-gradient-to-r from-[#0960E1] to-[#0042A6] rounded-lg p-3 text-2xl text-center">
          <p>5-6 October • 10AM - 6PM • SIS Surabaya • FREE</p>
        </div>
        <div className="h-10"></div>
        <Link href="https://forms.gle/xggVjcUktAzfWbBc6">
          {" "}
          <Button className="md:w-[400px] bg-[#2563EB] text-white">
            Register Now
          </Button>
        </Link>
      </div>
      <div className="max-w-3xl min-h-[300px] bg-gradient-to-br from-[#0042A6] to-[#07173F] rounded-lg mx-auto mb-20 grid space-y-4 md:space-y-0 md:grid-cols-2 p-12">
        <p className="text-4xl font-bold">What will I do?</p>
        <p className="text-xl font-medium">
          You will pick one of 25 project ideas made by NASA. These range from
          making a story about space to creating a artificial ecosystem! These
          projects are made with beginners in mind, so anybody at any skill
          level can join.
        </p>
      </div>
      <div className="max-w-3xl min-h-[300px] bg-gradient-to-br from-[#0042A6] to-[#07173F] rounded-lg mx-auto mb-20 grid space-y-4 md:space-y-0 md:grid-cols-2 p-12">
        <div className="flex flex-col justify-center">
          <p className="text-3xl font-bold">Where?</p>
          <p className="text-xl">SIS Surabaya @ HR Muhammad</p>
          <div className="h-6"></div>
          <p className="text-3xl font-bold">Date & Time</p>
          <p className="text-xl">5-6 October (Saturday & Sunday)</p>
          <p className="text-xl">10AM - 6PM Everyday</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-3xl font-bold">Who can join?</p>
          <p className="text-xl">
            Anybody under 18 and is in secondary / high school!
          </p>
          <div className="h-6"></div>
          <p className="text-3xl font-bold">What field?</p>
          <p className="text-xl">People with any skill can join!</p>
        </div>
      </div>
      <div className="max-w-3xl h-[300px] rounded-lg bg-gradient-to-br from-[#0042A6] to-[#07173F] mx-auto mb-20 flex flex-col space-y-4 justify-center items-center px-8 text-center md:px-0">
        <p className="text-3xl md:text-5xl font-bold">Register Now For Free</p>
        <Link href="https://forms.gle/xggVjcUktAzfWbBc6">
          {" "}
          <Button variant="outline" className="bg-transparent border-white">
            Register Now
          </Button>
        </Link>
      </div>
      <div className="max-w-3xl mx-auto text-3xl ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who can join?</AccordionTrigger>
            <AccordionContent>
              Anybody from secondary to high school! This competition is also to
              any skills area & level. Most projects aren&apos;t coding so
              artists, videographers, etc are invited!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Is it really any skill level?
            </AccordionTrigger>
            <AccordionContent>
              Yep! Most projects that students can pick to do are actually not
              coding. They involve a lot of design, research, and creativity.
              For example, one of the project is to create a story about NASA.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              How much spots are there?
            </AccordionTrigger>
            <AccordionContent>
              We&apos;re still deciding how much spots, but its between 50 to
              100.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Should I / my child join?
            </AccordionTrigger>
            <AccordionContent>
              If you want your kid (or you) to learn about technology,
              creativity, innovation, and teamwork, then yes! This is a great
              opportunity to learn about all of those things.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              How will the cash be distributed?
            </AccordionTrigger>
            <AccordionContent>
              There are 2 ways of distribution (up to the winner). First is a
              virtual visa card that can be used anywhere. Second is a bank
              transfer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              What about food?
            </AccordionTrigger>
            <AccordionContent>
              We are still deciding on this. We will update you on this soon
              through the phone number you provide when registering.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
