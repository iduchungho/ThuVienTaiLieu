import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { get_order_by_ctmid } from './../../utils/order';
import { GetMenuById } from './../../utils/menu';
import {ReactComponent as NotFound} from '../img/NotFound.svg'

OrderSection.propTypes = {};
function OrderSection(props) {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const loggedInUser = useSelector((state) => state.user.current);
  useEffect(() => {
    const getOrder = async () => {
      const data = await get_order_by_ctmid(loggedInUser.customer_id);
      setOrder(data.data);
    };
    getOrder();
  }, []);

  return (
    <div className="bg-gray-50 mt-6">
      <div className="max-w-2xl mx-auto pt-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {order && (<div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
          <div className="flex sm:items-baseline sm:space-x-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order #54879</h1>
          </div>
          <p className="text-sm text-gray-600">
            Order placed{' '}
            <time dateTime="2021-03-22" className="font-medium text-gray-900">
              March 22, 2021
            </time>
          </p>
          <a href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden">
            View invoice<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>)}
        

        {/* Products */}
        <div className="mt-6">
          <h2 className="sr-only">Products purchased</h2>

          <div className="space-y-8">
            {!order && (
              <NotFound/>
            )}
            {order && order.map((product) => (
              <div
                key={product.order_id}
                className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg"
              >
                <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-7">
                    <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                      <img
                        src={product.img}
                        alt="product"
                        className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                      />
                    </div>

                    <div className="mt-6 sm:mt-0 sm:ml-6">
                      <h3 className="text-base font-medium text-gray-900">
                        <div>{product.menu_name}</div>
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">${product.price}</p>
                      <p className="mt-3 text-sm text-gray-500">
                        This durable and portable insulated tumbler will keep your beverage at the perfect temperature
                        during your next adventure.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:col-span-5">
                    <dl className="grid grid-cols-2 gap-x-6 text-sm">
                      <div>
                        <dt className="font-medium text-gray-900">Order Status</dt>
                        <dd className="mt-3 text-gray-500">
                          <span className="block">{product.order_status}</span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Quantity</dt>
                        <dd className="mt-3 text-gray-500">
                          <span className="block">{product.quantity}</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSection;
