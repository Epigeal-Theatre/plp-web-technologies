// Function to toggle the state of a switch
function toggleSwitch(buttonId) {
    const button = document.getElementById(buttonId);
    const label = button.nextElementSibling; // Get the label element

    // Toggle the state
    if (button.textContent === 'Off') {
        button.textContent = 'On';
        button.style.backgroundColor = getButtonColor(buttonId);
    } else {
        button.textContent = 'Off';
        button.style.backgroundColor = '#9e9e9e'; // Grey color for off state
    }

    // Update label text based on button state
    label.textContent = button.textContent;
}

// Function to get the color based on the button id
function getButtonColor(buttonId) {
    switch (buttonId) {
        case 'cheapSwitch':
            return '#FF5722'; // Red color for cheap
        case 'fastSwitch':
            return '#2196F3'; // Blue color for fast
        case 'goodSwitch':
            return '#4CAF50'; // Green color for good
        default:
            return '#9e9e9e'; // Default grey color
    }
}