import ImageLink from "@/components/ImageLink";

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Welcome to my website
      </h1>
      <p className="text-xl text-zinc-300 mb-12 max-w-2xl">
        I have created this to show some experience I have through built projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 - Moonwear */}
        <ImageLink
          href="https://www.moonwear.shop"
          imageSrc="/moonwear.png"
          alt="Moonwear store"
          priority
        />

        {/* Project 2 - Coffee Shop Finder */}
        <ImageLink
          href="https://coffee-shops-six.vercel.app"
          imageSrc="/coffeeshops.png"
          alt="Coffee Shop Finder"
          priority
        />

        {/* Project 3 - Job Aggregator */}
        <ImageLink
          href="https://job-aggr-frontend.vercel.app/"
          imageSrc="/jobaggr.png"
          alt="Job Aggregator"
          priority
        />
      </div>
    </div>
  );
}
