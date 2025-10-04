import React from 'react';
import DetailCard from '../DetailCard';

const PlanetaryPositionsSection = ({ planetaryPositions }) => {
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6 text-violet-800 border-b-2 border-yellow-400 inline-block pb-1">
                Planetary Positions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {planetaryPositions.map((planet, index) => (
                    <DetailCard
                        key={index}
                        title={planet.position}
                        details={{ sign: `${planet.sign} • ${planet.house}`, planets: [] }}
                        icon={planet.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default PlanetaryPositionsSection;
