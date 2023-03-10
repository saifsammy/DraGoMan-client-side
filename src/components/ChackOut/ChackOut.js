import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChackOut = () => {
    const chackout = useLoaderData();
    const { name, image, Description } = chackout;
    console.log(chackout);
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                    <div className="space-y-2">
                        <p rel="noopener noreferrer" className="inline-block text-2xl font-semibold sm:text-3xl">{name}</p>
                    </div>
                    <div className="dark:text-gray-100">
                        <p>{Description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChackOut;