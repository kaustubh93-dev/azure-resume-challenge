const productionApiUrl = 'http://localhost:7071/api/ResumeCounter';

function getOrdinalSuffix(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  }

  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

async function getVisitCountAndUpdate() {
  try {
    const response = await fetch(productionApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json(); // Parse response as JSON
    const visitCount = responseData.count;
    const suffix = getOrdinalSuffix(visitCount);
    document.getElementById('counter').textContent = `${visitCount}${suffix}`;
  } catch (error) {
    console.error('Error fetching and updating visit count ', error);
  }
}

getVisitCountAndUpdate();