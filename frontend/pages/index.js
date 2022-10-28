import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';
import data from '../ultis/data';
import mongodb from '../ultis/mongodb';

export default function Home({ products }) {
  return (
    <Layout title={`Trang chủ`}>
      <div>
        <h1
          className={`px-10 md:px-14 lg:px-18 xl:px-28 font-bold text-lg uppercase w-full py-2 sm:my-6 md:my-4 lg:my-2 xl:my-1 bg-gray-200`}
        >
          Iphone
        </h1>
        <div
          className={`xl:container m-auto md:px-10 xl:px-0 sm:px-16  lg:py-6 md:py-4 sm:py-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 z-10`}
        >
          {products.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await mongodb.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(mongodb.handleConvertDocumentToObj),
    },
  };
}
