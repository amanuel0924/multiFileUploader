import React from 'react';

export const ProductPage = () => {
  return (
    <div className="bg-gray-100 container mx-auto dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              File Name
            </h2>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                File Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sed ante justo. Integer euismod libero id mauris malesuada tincidunt.
                Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
                vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
                nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
                nisl suscipit, nec tincidunt mi consectetur.
              </p>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4">

            <table className="min-w-full h-fit">
              <thead className="bg-white border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    First
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Last
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Jacob
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Dillan
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @fat
                  </td>
                </tr>
                <tr className="bg-gray-100 border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Twen
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @twitter
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Bob
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Dillan
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @fat
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

