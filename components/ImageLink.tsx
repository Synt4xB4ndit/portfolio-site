import Link from 'next/link';
import Image from 'next/image';

interface ImageLinkProps {
    href: string
    imageSrc: string
    alt: string
}

export default function ImageLink({
    href, imageSrc, alt}: ImageLinkProps) {
        return (
            <Link 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity">
             
             <Image
             src={imageSrc}
             alt={alt}
             width={400}
             height={300}
             className="rounded-lg"
             />

             </Link>
        )
    }
