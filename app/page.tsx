import Image from 'next/image'
import Hero from "@/components/main/Hero";
import About from "@/components/main/about";
import Events from '@/components/main/Events';
import Gallery from '@/components/main/Gallery';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Events />
        <Gallery />
      </div>
    </main>
  )
}
