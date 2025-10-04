import React from 'react';

const DetailCard = ({ title, details, degrees, icon }) => (
    <div className="p-6 border border-yellow-300 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg hover:border-yellow-400 transition duration-200 min-h-28 relative">
        <h3 className="font-bold text-lg text-violet-800 mb-2 flex items-center gap-2">
            {icon && <span className="text-2xl">{icon}</span>}
            {title}
        </h3>
        {degrees && (
            <span className="absolute top-3 right-4 text-sm text-gray-500 font-medium">
                {degrees}
            </span>
        )}
        <p className="text-gray-700 mb-2 font-medium">{details.sign}</p>
        <div className="flex flex-wrap gap-2">
            {details.planets.map((planet, index) => (
                <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full font-semibold text-violet-700 bg-yellow-100 shadow-sm"
                >
                    {planet}
                </span>
            ))}
        </div>
    </div>
);

export default DetailCard;
