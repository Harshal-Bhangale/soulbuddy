import React from 'react';
import { useAuth } from '../context/UserContext';
import BirthDetailsSection from '../components/BirthChart/Section/BirthDetailsSection';
import HousesSection from '../components/BirthChart/Section/HousesSection';
import PlanetaryPositionsSection from '../components/BirthChart/Section/PlanetaryPositionsSection';
import { getBirthDetails, getHouseData, getPlanetaryPositions } from '../utils/birthChartUtils';

function BirthChartPage() {
    const { user } = useAuth();

    if (!user) return <p className="text-center mt-10 text-violet-700">Loading your profile...</p>;

    const profile = user.profile || {};
    const birthDetails = getBirthDetails(profile);
    const houseData = getHouseData(profile);
    const planetaryPositions = getPlanetaryPositions(profile);

    return (
        <div className="p-6 lg:p-10 w-full bg-gradient-to-br from-white via-purple-50 to-yellow-50 min-h-screen space-y-12">
            <header className="text-center">
                <p className="text-xl text-violet-700 font-medium tracking-wide">Birth Chart</p>
                <h1 className="text-4xl font-extrabold mt-2 text-violet-900 relative inline-block">
                    Your Kundli
                    <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-yellow-400 rounded-full transform -translate-x-1/2"></span>
                </h1>
            </header>

            <BirthDetailsSection birthDetails={birthDetails} />
            <HousesSection houseData={houseData} />
            <PlanetaryPositionsSection planetaryPositions={planetaryPositions} />
        </div>
    );
}

export default BirthChartPage;
