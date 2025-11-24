'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDebouncedCallback } from 'use-debounce';
import '../globals.css'

export default function Search({ placeholder, isLoading }: { placeholder: string; isLoading: boolean }) {
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`serching for: ${term}`); 
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 3000)
  return (
    <div className=" flex gap-4 w-full justify-center  ">
      <div className="relative  overflow-hidden p-0.5 ">
        {isLoading &&(
          <div className='absolute inset-0 shimmer pointer-events-none rounded-md min-w-full h-full'></div>)
          }
      <div className="z-100 bg-opacity-50">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className={`block rounded-md py-[4px] sm:py-[6px] pl-3 xs:pl-10 text-sm  placeholder:text-gray-500 w-[212px] sm:h-[34px] sm:max-w-[450px]  md:w-[850px] outline-2 ${isLoading ? '': 'focus:outline-[#0AA1A1]'}`}
          placeholder={placeholder}
          onChange={(e)=>{
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <MagnifyingGlassIcon className="absolute right-3 xs:left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <button className="hidden xs:block fancyBorder rounded-full  pl-5 pr-5  ">search</button>
      
    </div>
  );
}