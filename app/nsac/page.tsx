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
          src="/background2.jpg "
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
          <p>5-6 October • 10AM - 6AM • SIS Surabaya • FREE</p>
        </div>
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
