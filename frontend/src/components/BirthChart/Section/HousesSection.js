import React from 'react';
import DetailCard from '../DetailCard';

const HousesSection = ({ houseData }) => {
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6 text-violet-800 border-b-2 border-yellow-400 inline-block pb-1">
                The 12 Houses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {houseData.map((house, index) => (
                    <DetailCard
                        key={index}
                        title={house.title}
                        details={{ sign: house.sign, planets: house.planets }}
                        degrees={house.degrees}
                    />
                ))}
            </div>
        </section>
    );
};

export default HousesSection;
