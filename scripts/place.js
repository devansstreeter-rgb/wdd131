const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("wind-speed");
const windChill = document.getElementById("wind-chill");
const tempValue = Number(temperature.innerText);
const speedValue = Number(windSpeed.innerText);

function calculateWindChill(temp, speed)
{
    wcIndex = 35.74 + 0.6215*temp - 35.75*speed**0.16 + 0.4275*temp*speed**0.16;
    return wcIndex.toFixed(1);
}

if (tempValue <= 50 && speedValue > 3)
{
    windChill.innerText = calculateWindChill(tempValue, speedValue);
}