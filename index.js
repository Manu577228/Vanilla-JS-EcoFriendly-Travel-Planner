document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mode = document.getElementById('mode').value;
    const distance = parseFloat(document.getElementById('distance').value);
    
    if (isNaN(distance) || distance <= 0) {
        alert('Please enter a valid distance.');
        return;
    }

    const carbonFootprint = calculateCarbonFootprint(mode, distance);
    document.getElementById('result').innerText = `Estimated Carbon Footprint: ${carbonFootprint.toFixed(2)} kg CO2`;
});

function calculateCarbonFootprint(mode, distance) {
    const emissionFactors = {
        car: 0.21,    // kg CO2 per km
        train: 0.05,  // kg CO2 per km
        plane: 0.18,  // kg CO2 per km
        bus: 0.09,    // kg CO2 per km
        bike: 0.01,   // kg CO2 per km
        walk: 0.00    // kg CO2 per km
    };

    return distance * (emissionFactors[mode] || 0);
}
