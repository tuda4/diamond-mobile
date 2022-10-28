import React from 'react';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti';
import { SiZalo } from 'react-icons/si';
export default function Footer() {
  const sloganFooter = '- Uy tín là vàng -';
  const descriptionFooter =
    'Được thành lập vào năm 2020, chúng tôi những người trẻ, luôn làm việc với nhiệt huyết và tinh thần hết mình. Diamond mobile là địa chỉ uy tín, tin cậy...';
  const socialmedia = [
    {
      name: (
        <TiSocialFacebook
          className={`text-blue-500`}
          size={40}
        ></TiSocialFacebook>
      ),
      link: 'https://www.facebook.com/diamondmobilehanoihaiduong',
    },
    { name: <SiZalo className={`text-blue-400`} size={40}></SiZalo>, link: '' },
    {
      name: (
        <TiSocialYoutube className={`text-red-500`} size={40}></TiSocialYoutube>
      ),
      link: '',
    },
  ];

  const itemsInFooter = [
    { name: 'Iphone mới', link: '/' },
    { name: 'Iphone cũ', link: '/' },
    { name: 'Phụ kiện', link: '/' },
  ];

  const advisePhone = '0123456789';
  const CSKH = '0123456789';

  return (
    <div
      className={`2xl:container bg-gray-900 h-fit flex justify-center text-gray-200`}
    >
      <footer
        className={`xl:container w-full grid xl:grid-cols-2 lg:grid-cols-2 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-2 md:gird-cols-1 gap-10 md:px-10 xl:px-0 sm:px-10 text-center xl:py-6 lg:py-6 md:py-4 sm:py-12 `}
      >
        <div className={`flex flex-col items-start text-start gap-2`}>
          <h1 className={`uppercase text-xl font-medium`}>Diamond mobile</h1>
          <h3 className={`text-yellow-500`}>{sloganFooter}</h3>
          <i className={`text-justify `}>{descriptionFooter}</i>
          <div className={`flex gap-10 justify-center w-full my-4`}>
            {socialmedia.map((item, index) => (
              <a
                target="_blank"
                className={`p-2 text-center rounded-full border active:border-none active:bg-gray-700`}
                href={item.link}
                key={index}
              >
                {item.name}
              </a>
            ))}
          </div>
          <p className={`text-justify`}>
            Địa chỉ: số 46 Xuân Thủy, đường Cầu Giấy, Cầu Giấy, Hà Nội
          </p>
        </div>
        <div className={`grid grid-cols-2 gap-4`}>
          <div className={` text-start gap-2`}>
            <h1 className={`uppercase text-xl font-medium`}>Sản phẩm</h1>
            <div className={`py-4`}>
              {itemsInFooter.map((item) => (
                <p
                  key={item.name}
                  className={`py-2 active:text-blue-200 hover:text-blue-300 w-fit`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className={` text-start gap-2`}>
            <h1 className={`uppercase text-xl font-medium`}>Liên hệ</h1>
            <div className="py-4">
              <h3 className="py-2">
                Tư vấn mua hàng:{' '}
                <br/>
                <a className={`underline`} href={`tel: +${advisePhone}`}>
                  {advisePhone}
                </a>
              </h3>
              <h3 className='py-2'>
                CSKH:{' '}
                <br/>
                <a className={`underline`} href={`tel: +${CSKH}`}>
                  {CSKH}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
