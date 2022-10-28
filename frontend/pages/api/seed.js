import data from '../../ultis/data';
import User from '../../models/User';
import mongodb from '../../ultis/mongodb';
import Product from '../../models/Product';

const handlUser = async (req, res) => {
  await mongodb.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await mongodb.disconnect();
  res.send({ message: 'seeded successfully' });
};

export default handlUser;
