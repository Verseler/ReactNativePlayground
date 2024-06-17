const ADAPTIVE_ACCEL_FILTER = true;
let lastAccel = [0, 0, 0];
let accelFilter = [0, 0, 0];

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function norm(x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
}

function onAccelerometerChanged(accelX, accelY, accelZ) {
    // High pass filter
    const updateFreq = 30; // Match this to your update speed
    const cutOffFreq = 0.9;
    const RC = 1.0 / cutOffFreq;
    const dt = 1.0 / updateFreq;
    const filterConstant = RC / (dt + RC);
    let alpha = filterConstant;
    const kAccelerometerMinStep = 0.033;
    const kAccelerometerNoiseAttenuation = 3.0;

    if (ADAPTIVE_ACCEL_FILTER) {
        const d = clamp(Math.abs(norm(accelFilter[0], accelFilter[1], accelFilter[2]) - norm(accelX, accelY, accelZ)) / kAccelerometerMinStep - 1.0, 0.0, 1.0);
        alpha = d * filterConstant / kAccelerometerNoiseAttenuation + (1.0 - d) * filterConstant;
    }

    accelFilter[0] = alpha * (accelFilter[0] + accelX - lastAccel[0]);
    accelFilter[1] = alpha * (accelFilter[1] + accelY - lastAccel[1]);
    accelFilter[2] = alpha * (accelFilter[2] + accelZ - lastAccel[2]);

    lastAccel[0] = accelX;
    lastAccel[1] = accelY;
    lastAccel[2] = accelZ;

    return {x: accelFilter[0], y:  accelFilter[1], z: accelFilter[2]}
}

