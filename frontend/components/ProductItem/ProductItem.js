import React from 'react';
import Link from 'next/link';
import stytles from './ProductItem.module.scss';
export default function ProductItem({ product }) {
  return (
    <div className="card relative rounded-md border border-gray-400 h-full w-full py-1 hover:-translate-y-1 hover:shadow-md origin-top transition duration-300 bg-white">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md shadow-sm my-2 object-contain mx-auto h-60 items-center cursor-pointer "
        ></img>
      </Link>
      <p
        className={`${!product.discount ? 'hidden' : 'block'}
          absolute top-2 rounded-l-full py-1 text-sm px-3 bg-red-500 text-gray-50 ${
            stytles.label
          }`}
      >
        Giảm {product.discount} %
      </p>
      <div className={`flex flex-col p-4 text-center`}>
        <Link href={`/product/${product.slug}`}>
          <h2
            className={`text-lg font-medium py-2 cursor-pointer uppercase w-full`}
          >
            {product.name}
          </h2>
        </Link>
        <h3
          className={`text-gray-600 py-2 flex items-center w-full text-center gap-2 text-sm lg:text-base flex-wrap`}
        >
          Giá từ:{'  '}
          <i
            className={`text-xl text-red-400 font-medium tracking flex justify-center`}
          >
            {product.stores[0]} <span className={`text-sm`}>đ</span>
          </i>
          <p className={`line-through text-sm ${product.cost ? 'block' : 'hidden'}`}>{product.cost} đ</p>
        </h3>
        <div
          className={`${
            !product.sale ? 'hidden' : 'block'
          } p-2 bg-gray-100 text-gray-600 w-fit rounded`}
        >
          <p className={` text-start text-sm`}>
            <span className={`p-1 mr-2 bg-yellow-400 rounded text-sm`}>KM</span>
            {product.sale}
          </p>
        </div>
      </div>
    </div>
  );
}
