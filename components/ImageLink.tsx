import Link from "next/link";
import Image from "next/image";

interface ImageLinkProps {
  href: string;
  imageSrc: string;
  alt: string;
  priority?: boolean; // optional prop
}

export default function ImageLink({
  href,
  imageSrc,
  alt,
  priority = false,
}: ImageLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-zinc-800 border border-zinc-700">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
      </div>
    </Link>
  );
}
