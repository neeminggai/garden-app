// TODO: Create a function for each season
// TODO: Add documentation

function gardenAdvice(month) {
    if ([12, 1, 2].includes(month)) {
        return "Winter: Plant indoor herbs";
    } else if ([3, 4, 5].includes(month)) {
        return "Spring: Great time to plant flowers";
    } else if ([6, 7, 8].includes(month)) {
        return "Summer: Water plants daily";
    }
    return "Autumn: Prepare soil for next season";
}

const month = 3; // TODO: Replace hardcoded value
console.log(gardenAdvice(month));