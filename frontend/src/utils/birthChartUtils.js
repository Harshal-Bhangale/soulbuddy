// utils/birthChartUtils.js

export const getBirthDetails = (profile) => {
    return {
        date: profile.dateOfBirth ? new Date(profile.dateOfBirth).toLocaleDateString() : 'N/A',
        time: profile.timeOfBirth || 'N/A',
        place: profile.city && profile.state ? `${profile.city}, ${profile.state}` : 'N/A',
    };
};

export const getHouseData = (profile) => {
    return profile.houses?.length
        ? profile.houses
        : [
            { title: 'House 1', sign: 'Leo', planets: ['Sun', 'Mars'], degrees: "15°30'" },
            { title: 'House 2', sign: 'Virgo', planets: ['Mercury'], degrees: "20°45'" },
            { title: 'House 3', sign: 'Libra', planets: [], degrees: "25°15'" },
            { title: 'House 4', sign: 'Scorpio', planets: ['Venus'], degrees: "28°20'" },
            { title: 'House 5', sign: 'Sagittarius', planets: [], degrees: "30°10'" },
            { title: 'House 6', sign: 'Capricorn', planets: ['Saturn'], degrees: "15°45'" },
            { title: 'House 7', sign: 'Aquarius', planets: [], degrees: "18°30'" },
            { title: 'House 8', sign: 'Pisces', planets: ['Jupiter'], degrees: "22°15'" },
            { title: 'House 9', sign: 'Aries', planets: [], degrees: "25°40'" },
            { title: 'House 10', sign: 'Taurus', planets: [], degrees: "28°25'" },
            { title: 'House 11', sign: 'Gemini', planets: ['Moon'], degrees: "12°35'" },
            { title: 'House 12', sign: 'Cancer', planets: [], degrees: "15°50'" },
        ];
};

export const getPlanetaryPositions = (profile) => {
    return profile.planetaryPositions?.length
        ? profile.planetaryPositions
        : [
            { icon: '☀️', position: 'Sun', sign: 'Leo', house: 'House 1' },
            { icon: '🌙', position: 'Moon', sign: 'Gemini', house: 'House 11' },
            { icon: '♂️', position: 'Mars', sign: 'Leo', house: 'House 1' },
            { icon: '☿️', position: 'Mercury', sign: 'Virgo', house: 'House 2' },
            { icon: '♀️', position: 'Venus', sign: 'Scorpio', house: 'House 4' },
            { icon: '♃', position: 'Jupiter', sign: 'Pisces', house: 'House 8' },
            { icon: '♄', position: 'Saturn', sign: 'Capricorn', house: 'House 6' },
        ];
};
