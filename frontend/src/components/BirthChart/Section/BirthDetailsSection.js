import React from 'react';
import BirthDetailBox from '../BirthDetailBox';

const BirthDetailsSection = ({ birthDetails }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BirthDetailBox icon="🗓️" label="Date of Birth" value={birthDetails.date} />
            <BirthDetailBox icon="🕒" label="Time of Birth" value={birthDetails.time} />
            <BirthDetailBox icon="📍" label="Place of Birth" value={birthDetails.place} />
        </div>
    );
};

export default BirthDetailsSection;
