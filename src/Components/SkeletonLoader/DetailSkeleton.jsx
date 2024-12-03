import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonDetail = () => {
  return (
    <div className="flex flex-col space-y-12 px-4 md:px-8 lg:px-16">
      <Skeleton text className="w-2/5 h-8 sm:h-10 animate-pulse" enableAnimation={false} />

      <Skeleton className='w-full sm:w-3/4 md:w-2/4 h-48 sm:h-80 animate-pulse' enableAnimation={false} />

      <div className="flex justify-evenly items-center mt-4 animate-pulse">
        <Skeleton className='h-10 w-24 sm:w-32' enableAnimation={false} />
        <Skeleton className='h-10 w-24 sm:w-32' enableAnimation={false} />
      </div>

      <div className='flex justify-center animate-pulse'>
        <table className="w-full sm:w-3/4 md:w-2/4">
          <tbody>
            <tr>
              <th className="th-style">
                <Skeleton className='w-20 md:w-24 h-6' enableAnimation={false} />
              </th>
              <td className="td-style">
                <Skeleton className='w-64 md:w-96 h-6' enableAnimation={false} />
              </td>
            </tr>

            <tr>
              <th className="th-style">
                <Skeleton className='w-20 md:w-24 h-6' enableAnimation={false} />
              </th>
              <td className="td-style">
                <Skeleton className='w-64 md:w-96 h-6' enableAnimation={false} />
              </td>
            </tr>

            <tr>
              <th className="th-style">
                <Skeleton className='w-20 md:w-24 h-6' enableAnimation={false} />
              </th>
              <td className="td-style">
                <Skeleton className='w-64 md:w-96 h-6' enableAnimation={false} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between gap-4 animate-pulse">
        <button disabled className="sm:flex items-center justify-center hidden">
          <Skeleton circle className="h-8 w-8 " enableAnimation={false} />
        </button>

        <div className="flex items-center justify-center gap-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <Skeleton className="w-32 h-24 sm:w-40 md:w-48" enableAnimation={false} />
            <Skeleton className="w-32 h-24 sm:w-40 md:w-48" enableAnimation={false}/>
            <Skeleton className="w-32 h-24 sm:w-40 md:w-48" enableAnimation={false}/>      
        </div>

        <button disabled className="sm:flex items-center justify-center hidden">
          <Skeleton circle className="h-8 w-8" enableAnimation={false} />
        </button>
      </div>


    </div>
  );
};

export default SkeletonDetail;
