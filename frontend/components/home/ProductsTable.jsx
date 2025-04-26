import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ProductsTable = ({ products }) => {
  return (
    <table className='w-full border-spacing-2'>
      <thead className='bg-[#1A2238] text-white'>
        <tr>
          <th className='border border-slate-600 '>No</th>
          <th className='border border-slate-600 '>Title</th>
          <th className='border border-slate-600  max-md:hidden'>
            Category
          </th>
          <th className='border border-slate-600  max-md:hidden'>
            Price
          </th>
          <th className='border border-slate-600 '>Operations</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {product.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {product.category}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {product.price}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/products/details/${product._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/products/edit/${product._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/products/delete/${product._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;