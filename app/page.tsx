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
        {/* Project 1 */}
        <ImageLink
          href="www.moonwear.shop"
          imageSrc="moonwear.png"
          alt="Mountain landscape project"
        />

        {/* Project 2 */}
        <ImageLink
          href="coffee-shops-six.vercel.app"
          imageSrc="coffeeshops.png"
          alt="Wind turbines and road"
        />

        {/* Project 3 */}
        <ImageLink
          href="https://job-aggr-frontend.vercel.app/"
          imageSrc="jobaggr.png"
          alt="Laptop workspace"
        />

        {/* Project 4 */}
        <ImageLink
          href="https://example.com/project4"
          imageSrc="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
          alt="Vintage blue Volkswagen van"
        />

        {/* Project 5 - NEW */}
        <ImageLink
          href="https://example.com/project5"
          imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
          alt="Code on screen"
        />

        {/* Project 6 - NEW */}
        <ImageLink
          href="https://example.com/project6"
          imageSrc="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
          alt="Modern desk setup"
        />
      </div>
    </div>
  );
}
