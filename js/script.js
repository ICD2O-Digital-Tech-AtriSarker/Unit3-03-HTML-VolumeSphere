"use strict";
// Script for Volume of a Sphere

// Elements
// Inputs
const radiusInput = document.getElementById('radiusInput');
// Result Display
const volumeResult = document.getElementById('volumeResult');
// Calculate Button
const calculateBtn = document.getElementById('CalculateBtn');

// Code for calculating volume
function Calculate() {

  // Get Radius Input
  let radius = Number(radiusInput.value);

  // Calculate Volume of the Sphere
  let volume = (4 / 3) * Math.PI * (radius ** 3)

  // Round up to 2 decimal places, if needed
  if (volume % 1 != 0) {
    volume = volume.toFixed(2);
  }

  // Display Result
  volumeResult.innerHTML = "" + volume + "m<sup>3</sup>";
  return;
}

// Connect button click to the Calculate() function, 
calculateBtn.onclick = Calculate;

// Initial Calculate() call
Calculate();