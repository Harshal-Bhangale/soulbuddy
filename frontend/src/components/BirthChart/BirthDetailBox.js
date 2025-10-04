import React from 'react';

const BirthDetailBox = ({ icon, label, value }) => (
    <div className="flex items-center space-x-4 p-5 border border-yellow-300 rounded-2xl bg-white/90 shadow-md hover:shadow-lg hover:border-yellow-400 transition duration-200">
        <span className="text-3xl text-yellow-500">{icon}</span>
        <div>
            <p className="text-sm font-medium text-gray-600">{label}</p>
            <p className="text-lg font-semibold text-violet-900">{value}</p>
        </div>
    </div>
);

export default BirthDetailBox;
