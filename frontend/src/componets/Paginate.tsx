import React from 'react';
import { Link } from 'react-router-dom';

interface PaginateProps {
  page: number;
  pages: number;
  keyword?: string;
  link?: string;
}

const Paginate: React.FC<PaginateProps> = ({
  page,
  pages,
  keyword = '',
  link = '/files',
}) => {
  return (
    pages > 1 && (
      <div className=' flex justify-center  bottom-15  w-full absolute bottom-24'>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              keyword
                ? `/search/${keyword}/page/${x + 1}`
                : `${link}/${x + 1}`
            }
          >
            <div className={`${x + 1 === page ? 'bg-teal-800 text-white' : ''} px-3 py-2 text-gray-700 border-2 rounded-xl mx-1  border-teal-800`}>
              {x + 1}
            </div>
          </Link>
        ))}
      </div>
    )
  );
};

export default Paginate;
