import ImageLink from "@/components/ImageLink";
//import NearbyCoffeeShops from "@/components/CoffeeShops";

export default function Home(){
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 px-4">
    Welcome to my website
      </h1>
      <h2 className="text-2xl mb-8 px-4">I have created this to show some experience I have through
        built projects. 
      </h2>

      <div className="grid grid-cols-1 p-6 md:grid-cols-2
      lg:grid-cols-2 lg:py-8 gap-4 md:center">
        <ImageLink 
        href="https://example.com"
        imageSrc="https://picsum.photos/400/300?random=1"
        alt='Link 1'
        />
        <ImageLink
        href='google.com'
        imageSrc='https://picsum.photos/400/300?random=2'
        alt='Link 2'
        />
        <ImageLink
        href='github.com'
        imageSrc='https://picsum.photos/400/300?random=3'
        alt='Link 3'
        />
        <ImageLink
        href='x.com'
        imageSrc='https://picsum.photos/400/300?random=4'
        alt='Link 4'
        />
        

      </div>
      
    </div>
  )
}
