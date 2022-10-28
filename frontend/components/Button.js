import React from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <div>
      <Link href={props.link}>
        <button
          className={`xl:py-4 xl:px-6 hover:bg-slate-200 active:bg-gray-500 active:text-white rounded-sm transition sm:text-base md:text-sm lg:text-lg xl:text-lg sm:px-4 sm:py-2 lg:py-3 flex justify-center items-center gap-2${props.class}`}
        >
          {props.children}
        </button>
      </Link>
    </div>
  );
}
