function navigateToVideo() {
    const videoSelector = document.getElementById('videoSelector');
    const selectedValue = videoSelector.value;
    if (selectedValue) {
        window.location.href = selectedValue; // Navigate to the selected HTML file
    }
}