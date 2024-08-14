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
    <main className="mb-20">
      <div className="h-screen flex justify-center items-center flex-col space-y-2 my-2">
        <Image
          src="https://utfs.io/f/61c732c6-2b2a-4a1d-a82b-6349c5710e89-rbcs78.jpg"
          alt="NASA Space Apps Surabaya"
          width="1920"
          height="200"
          className="fixed -z-20 bg-cover opacity-50"
        />

        <div className="text-6xl font-bold text-white">
          NASA Space Apps Surabaya
        </div>
        <div className="text-3xl font-semibold">
          Compete for a prize pool of IDR 10,000,000
        </div>
        <div className="border border-blue-600 rounded-b-lg p-3 text-2xl">
          <p>5-6 October • 10AM - 6PM • SIS Surabaya • FREE</p>
        </div>
        <Link href="https://forms.gle/xggVjcUktAzfWbBc6">
          {" "}
          <Button>Register Now</Button>
        </Link>
      </div>
      <div className="max-w-3xl h-[300px] border rounded-lg border-blue-600 mx-auto mb-20 grid grid-cols-2 p-12">
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
      <div className="max-w-3xl h-[300px] border rounded-lg border-blue-600 mx-auto mb-20 flex flex-col space-y-4 justify-center items-center">
        <p className="text-3xl font-bold">Register Now For Free</p>
        <Link href="https://forms.gle/xggVjcUktAzfWbBc6">
          {" "}
          <Button>Register Now</Button>
        </Link>
      </div>
      <div className="max-w-3xl mx-auto text-3xl">
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
            <AccordionTrigger>Is it paid?</AccordionTrigger>
            <AccordionContent>
              Nope! It is completely free to join.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How much spots are there?</AccordionTrigger>
            <AccordionContent>
              We&apos;re still deciding how much spots, but its between 50 to
              100.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
