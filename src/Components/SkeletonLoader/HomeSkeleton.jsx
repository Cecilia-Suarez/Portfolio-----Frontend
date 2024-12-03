import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-around items-center">
      <div className='flex flex-col justify-center items-center gap-8'>
        <Skeleton className="w-96 h-10 sm:h-10 animate-pulse" enableAnimation={false} />

        <Skeleton className="w-72 h-96 sm:h-10 animate-pulse" enableAnimation={false} />

        <button disabled className="sm:flex items-center justify-center hidden">
          <Skeleton className="h-8 w-24" enableAnimation={false} />
        </button>
      </div>

      <Skeleton className='w-full sm:w-3/4 md:w-2/4 h-48 sm:h-80 animate-pulse' enableAnimation={false} />
    </div>
  );
};

export default HomeSkeleton;