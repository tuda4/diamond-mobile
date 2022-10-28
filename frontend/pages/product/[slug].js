import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import data from '../../ultis/data';
import Button from '../../components/Button';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineGift } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import mongodb from '../../ultis/mongodb';
import Product from '../../models/Product';

export default function ProductDisplay(props) {
  const { product } = props
  

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }
  const [store, setStore] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    setStore((prev) => (prev = type));
    return () => {;};
  }, [type]);

  return (
    <Layout title={product.name}>
      <div className="p-6">
        <Button link={`/`} class="text uppercase">
          <IoIosArrowBack className="text-xl "></IoIosArrowBack>Trở lại
        </Button>
        <div
          className={`m-4 p-4 md:mx-6 xl:mx-12 border grid xl:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-2 md:gap-4 xl:gap-6 boder-gray-200`}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            priority
            height={400}
            className={`object-contain border-2 border-gray-300`}
          ></Image>
          <div className={`grid grid-rows-2`}>
            <div
              className={`md:p-4 xl:border-l md:border-l sm:px-4 relative border-gray-200 mb-2 max-h-min`}
            >
              <h1
                className={`uppercase md:text-xl sm:text-base font-semibold flex gap-2 flex-col items-center`}
              >
                {product.name}
                <span className="text-red-600">{store}</span>
              </h1>
              <div className="flex py-2 gap-2 md:py-3 md:gap-3 xl:py-4 xl:gap-4 flex-wrap items-center  justify-center">
                {product.stores.map((store, index) => (
                  <h3
                    key={store}
                    className={`box-border lg:px-3 lg:py-1 lg:text-base md:px-2 md:py-1 md:text-md sm:px-2 sm:py-1 sm:text-sm bg-gray-300 rounded cursor-pointer w-max
                    ${
                      type === store
                        ? 'border-2 border-blue-300 bg-slate-200 text-red-600'
                        : ''
                    }`}
                    onClick={() => {
                      setType(store);
                    }}
                  >
                    {store} <span className="text-sm">đ</span>
                  </h3>
                ))}
              </div>

              <h3>Màu:</h3>
            </div>
              <div className={`flex flex-col items-center gap-2 w-full `}>
              <Button
                class="w-full flex duration-300 flex-col bg-red-500 text-white font-medium hover:text-gray-800 rounded-md"
                link="tel: +012344567"
              >
                MUA NGAY
                <p className={`text-sm font-light`}>(Liên hệ cửa hàng)</p>
              </Button>
              <div className='flex gap-2 flex-wrap justify-center'>
                <Button
                  class="w-full flex duration-300 flex-col bg-blue-600 text-white font-medium hover:text-gray-800  rounded-md"
                  link="tel: +012344567"
                >
                  TRẢ GÓP 0%
                  <p className={`text-sm font-light`}>
                    (Xét duyệt qua điện thoại)
                  </p>
                </Button>
                <Button
                  class="w-full flex duration-300 flex-col bg-blue-600 text-white font-medium hover:text-gray-800  rounded-md"
                  link="tel: +012344567"
                >
                  TRẢ GÓP QUA THẺ
                  <p className={`text-sm font-light`}>(Visa, Mastercard)</p>
                </Button>
              </div>
            </div>
            <div className={`p-4 mt-2 md:border-l border-gray-200`}>
              <h1 className="flex gap-2 items-center font-medium w-full border-b py-1 border-gray-200">
                <AiOutlineGift className="text-xl" />
                Thông tin khuyến mãi
              </h1>
              <h3 className={`py-2 text-gray-700 `}>
                <span className={`p-1 mr-2 bg-yellow-400 rounded text-sm`}>
                  KM
                </span>
                {product.sale}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {params} = context;
  const {slug} = params

  await mongodb.connect()
  const product = await Product.findOne({slug}).lean()
  await mongodb.disconnect()
  return {
    props: {
      product: product ? mongodb.handleConvertDocumentToObj(product) : null
    }
  }
}