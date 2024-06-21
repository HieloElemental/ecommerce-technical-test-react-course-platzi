import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = ({ totalPrice, totalProducts, date }) => {
  return (
    <div className='flex justify-between items-center mb-3 border border-white rounded-lg p-4 w-80'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>
            {new Intl.DateTimeFormat("en-US").format(date)}
          </span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex gap-2 items-center'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-white cursor-pointer' />
        </p>
      </div>
    </div>
  );
};

export { OrdersCard };
