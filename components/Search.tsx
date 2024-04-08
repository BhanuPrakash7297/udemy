import Image from 'next/image';
import React, { useState } from 'react'
import { Input } from './ui/input';

const Search = ({
  placeholder = "Search title...",
}: {
  placeholder?: string;
}) => {

    const [query, setQuery] = useState("");
  return (
    <div className="flex-center min-h-[47px] w-full overflow-hidden rounded-full px-4 py-3 bg-grey-100 border-2">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="border-0 p-regular-16 bg-grey-100 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;

