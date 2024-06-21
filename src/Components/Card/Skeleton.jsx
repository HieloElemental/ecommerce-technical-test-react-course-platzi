const Skeleton = () => {
  return (
    <div className='w-64 h-80 max-w-xs bg-gray-800 animate-pulse border border-gray-700 rounded-lg shadow'>
      <div className='relative mb-2 w-full h-4/6 bg-gray-700 rounded-t-lg'>
        <div className='absolute bottom-0 left-0 rounded bg-gray-600 h-5 w-20 px-2.5 py-0.5 ms-3 m-2' />
      </div>
      <div className='px-5 pb-5'>
        <div className='mt-4 h-6 w-40 bg-gray-700' />
        <div className='flex items-start justify-between'>
          <div className='mt-3 h-8 w-20 bg-gray-700' />
          <div className='mt-2 h-10 w-24 rounded-md bg-gray-700' />
        </div>
      </div>
    </div>
  );
};

export { Skeleton };
