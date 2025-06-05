import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Portfolio Site',
  description: 'A display of my work'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}
)

{
  return (
    <html lang='en'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <nav className='bg-gradient-to-r from-indigo-900
         via-blue-700 to-cyan-500 p p-4'>
          <div className="container mx-auto flex justify-between">
            <Link 
            href="/" className="text-white font-bold">
            Portfolio Site
            </Link>

            <div className="space-x-4">

              <Link
               href="/" className="text-white
               hover:text-gray-300">Home
             </Link>
             <Link href='/about' className="text-white
              hover:text-gray-300" >
                About
              </Link>

              <Link 
              href='/contact' className='text-white
               hover:text-gray-300'>
                Contact
               </Link>
            </div>
          </div>
        </nav>

    <main className='min-h-screen bg-zinc-900'>
      {children}
    </main>

    <footer className="text-white p-4 mt-8">
        <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} </p>
        </div>
      </footer>
    



      </body>



    </html>
  )


}


