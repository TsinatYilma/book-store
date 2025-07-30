'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDebouncedCallback } from 'use-debounce';
import '../globals.css'

export default function Search({ placeholder }: { placeholder: string }) {
  /*
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`serching for: ${term}`); 
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 3000)*/
  return (
    <div className=" flex gap-4 w-full  mb-10">
      <div className=" relative w-full">
        <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="block rounded-md py-[4px] sm:py-[6px] pl-3 xs:pl-10 text-sm outline-2 placeholder:text-gray-500 w-full sm:h-[34px]  focus:outline-[#0AA1A1]"
        placeholder={placeholder}
        onChange={(e)=>{
          //handleSearch(e.target.value)
        }}
        //defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute right-3 xs:left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
      <button className=" xs:block fancyBorder rounded-full  px-4 md:px-6">search</button>
    </div>
  );
}