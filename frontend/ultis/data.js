import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@diamondmobile.com',
      password: bcrypt.hashSync('46xuanthuy'),
      isAdmin: true,
    },
    {
      name: 'Dev',
      email: 'webdev@diamondmobile.com',
      password: bcrypt.hashSync('46xuanthuy'),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: 'Iphone 14 Pro Max',
      category: ['iphone', 'iphone new', 'iphone 14'],
      image: '/images/iphone14promax_img1.jpg',
      slug: 'iphone-14-pro-max',
      sale: 'Hỗ trợ trả góp 0%, thủ tục nhanh chóng, 1 đổi 1 trong 30 ngày, bảo hành 2 năm, đồng giá với tất cả các màu.',
      discount: 0,
      descriptions: '',
      stores: [
        '128GB - 21.600.000',
        '256GB - 24.440.000',
        '512GB - 28.800.000',
        '1TB - 31.200.000',
      ],
      cost: '',
    },
    {
      name: 'Iphone 14 Pro ',
      category: ['iphone', 'iphone new', 'iphone 14'],
      image: '/images/iphone14pro_img1.jpg',
      slug: 'iphone-14-pro',
      sale: 'Hỗ trợ trả góp 0%, thủ tục nhanh chóng, 1 đổi 1 trong 30 ngày, bảo hành 2 năm, đồng giá với tất cả các màu.',
      discount: 22,
      descriptions: '',
      stores: [
        '128GB - 21.600.000',
        '256GB - 24.440.000',
        '512GB - 28.800.000',
        '1TB - 31.200.000',
      ],
      cost: '39.990.000',
    },
    {
      name: 'Iphone 14 Plus',
      category: ['iphone', 'iphone new', 'iphone 14'],
      image: '/images/iphone14plus_img1.jpg',
      slug: 'iphone-14-plus',
      sale: 'Hỗ trợ trả góp 0%, thủ tục nhanh chóng, 1 đổi 1 trong 30 ngày, bảo hành 2 năm, đồng giá với tất cả các màu.',
      discount: 10,
      descriptions: '',
      stores: [
        '128GB - 21.600.000',
        '256GB - 24.440.000',
        '512GB - 28.800.000',
        '1TB - 31.200.000',
      ],
      cost: '39.990.000',
    },
    {
      name: 'Iphone 14',
      category: ['iphone', 'iphone new', 'iphone 14'],
      image: '/images/iphone14_img1.jpg',
      slug: 'iphone-14',
      sale: '',
      discount: 12,
      descriptions: '',
      stores: [
        '128GB - 21.600.000',
        '256GB - 24.440.000',
        '512GB - 28.800.000',
        '1TB - 31.200.000',
      ],

      cost: '39.990.000',
    },
    {
      name: 'Iphone 13 Pro Max Cũ đẹp',
      category: ['iphone', 'iphone new', 'iphone 14'],
      image: '/images/iphone14promax_img1.jpg',
      slug: 'iphone-14-pro-max-old',
      sale: 'Hỗ trợ trả góp 0%, thủ tục nhanh chóng, 1 đổi 1 trong 30 ngày, bảo hành 2 năm, đồng giá với tất cả các màu.',
      discount: 0,
      descriptions: '',
      stores: [
        '128GB - 21.600.000',
        '256GB - 24.440.000',
        '512GB - 28.800.000',
        '1TB - 31.200.000',
      ],

      cost: '39.990.000',
    },
    {
      name: 'Iphone 13 Pro Cũ đẹp',
      category: ['iphone', 'iphone new', 'iphone 14'],
      image: '/images/iphone14pro_img1.jpg',
      slug: 'iphone-14-pro-old',
      sale: 'Hỗ trợ trả góp 0%, thủ tục nhanh chóng, 1 đổi 1 trong 30 ngày, bảo hành 2 năm, đồng giá với tất cả các màu.',
      discount: 22,
      descriptions: '',
      stores: [
        '128GB - 21.600.000',
        '256GB - 24.440.000',
        '512GB - 28.800.000',
        '1TB - 31.200.000',
      ],

      cost: '39.990.000',
    },
    {
      name: 'Iphone 13 Cũ đẹp',
      category: ['iphone', 'iphone new', 'iphone 14'],
      image: '/images/iphone14plus_img1.jpg',
      slug: 'iphone-14-plus-old',
      sale: 'Hỗ trợ trả góp 0%, thủ tục nhanh chóng, 1 đổi 1 trong 30 ngày, bảo hành 2 năm, đồng giá với tất cả các màu.',
      discount: 10,
      descriptions: '',
      stores: [
        '128GB - 21.600.000',
        '256GB - 24.440.000',
        '512GB - 28.800.000',
        '1TB - 31.200.000',
      ],

      cost: '39.990.000',
    },
    {
      name: 'Iphone 13 mini cũ đẹp',
      category: ['iphone', 'iphone new', 'iphone 14'],
      image: '/images/iphone14_img1.jpg',
      slug: 'iphone-14-old',
      sale: 'Hỗ trợ trả góp 0%, thủ tục nhanh chóng, 1 đổi 1 trong 30 ngày, bảo hành 2 năm, đồng giá với tất cả các màu.',
      discount: 12,
      descriptions: '',
      stores: [
        '128GB - 21.600.000',
        '256GB - 24.440.000',
        '512GB - 28.800.000',
        '1TB - 31.200.000',
      ],

      cost: '39.990.000',
    },
  ],
};

export default data;
