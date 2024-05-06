import Image from "next/image";
import Link from "next/link";

const PopularMovies = () => {
   return (
      <section id="popular" className="p-4 bg-neutral-100 dark:text-white dark:bg-neutral-900 rounded-md shadow">
         <div className="flex justify-between items-center">
            <strong className="text-lg md:text-xl">Popular Movies</strong>
            <button className="text-xs text-white bg-blue-600 flex items-center py-1.5 px-3 rounded-full font-medium hover:bg-blue-700 duration-200 cursor-pointer">View all</button>
         </div>

         <hr className="block mt-2 mb-2.5" />

         <div className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-between">
            <div className="movie-card relative">
               <Image width={1000} height={760} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded hidden md:flex" />

               <Image width={500} height={620} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded flex md:hidden" />

               <Link href="/" className="block text-sm mt-1">
                  <p className="truncate">Avengers - Endgame</p>
                  <p className="flex justify-between">
                     <span>Rate: 9/10</span>
                     <span className="text-red-500">Ongoing</span>
                  </p>
               </Link>
            </div>
            <div className="movie-card relative">
               <Image width={1000} height={760} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded hidden md:flex" />

               <Image width={500} height={620} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded flex md:hidden" />

               <Link href="/" className="block text-sm mt-1">
                  <p className="truncate">Avengers - Endgame</p>
                  <p className="flex justify-between">
                     <span>Rate: 9/10</span>
                     <span className="text-red-500">Ongoing</span>
                  </p>
               </Link>
            </div>
            <div className="movie-card relative">
               <Image width={1000} height={760} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded hidden md:flex" />

               <Image width={500} height={620} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded flex md:hidden" />

               <Link href="/" className="block text-sm mt-1">
                  <p className="truncate">Avengers - Endgame</p>
                  <p className="flex justify-between">
                     <span>Rate: 9/10</span>
                     <span className="text-red-500">Ongoing</span>
                  </p>
               </Link>
            </div>
            <div className="movie-card relative">
               <Image width={1000} height={760} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded hidden md:flex" />

               <Image width={500} height={620} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded flex md:hidden" />

               <Link href="/" className="block text-sm mt-1">
                  <p className="truncate">Avengers - Endgame</p>
                  <p className="flex justify-between">
                     <span>Rate: 9/10</span>
                     <span className="text-red-500">Ongoing</span>
                  </p>
               </Link>
            </div>
            <div className="movie-card relative">
               <Image width={1000} height={760} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded hidden md:flex" />

               <Image width={500} height={620} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded flex md:hidden" />

               <Link href="/" className="block text-sm mt-1">
                  <p className="truncate">Avengers - Endgame</p>
                  <p className="flex justify-between">
                     <span>Rate: 9/10</span>
                     <span className="text-red-500">Ongoing</span>
                  </p>
               </Link>
            </div>
            <div className="movie-card relative">
               <Image width={1000} height={760} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded hidden md:flex" />

               <Image width={500} height={620} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded flex md:hidden" />

               <Link href="/" className="block text-sm mt-1">
                  <p className="truncate">Avengers - Endgame</p>
                  <p className="flex justify-between">
                     <span>Rate: 9/10</span>
                     <span className="text-red-500">Ongoing</span>
                  </p>
               </Link>
            </div>
            <div className="movie-card relative">
               <Image width={1000} height={760} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded hidden md:flex" />

               <Image width={500} height={620} src="/avengers-endgame.jpeg" alt="avengers-endgame" className="aspect-[4/5] rounded flex md:hidden" />

               <Link href="/" className="block text-sm mt-1">
                  <p className="truncate">Avengers - Endgame</p>
                  <p className="flex justify-between">
                     <span>Rate: 9/10</span>
                     <span className="text-red-500">Ongoing</span>
                  </p>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default PopularMovies;
