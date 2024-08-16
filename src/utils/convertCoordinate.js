// const Pi = 3.14159265358979;
// const ro = 206264.8062;

// // Ellipsoid krass
// const aP = 6378245; // Major semi-axis
// const alP = 1 / 298.3; // compression
// const e2P = 2 * alP - Math.pow(alP, 2); // Square of eccentricity

// // Ellipsoid WGS84
// const aW = 6378137; // Major semi-axis
// const alW = 1 / 298.257223563; // compression
// const e2W = 2 * alW - Math.pow(alW, 2); // Square of eccentricity

// // Auxiliary values ​​for ellipsoid transformation
// const a = (aP + aW) / 2;
// const e2 = (e2P + e2W) / 2;
// const da = aW - aP;
// const de2 = e2W - e2P;

// // Linear transform elements, in meters
// const dx = 23.92;
// const dy = -141.27;
// const dz = -80.9;

// // Transform corner elements, in seconds
// const wx = 0;
// const wy = 0;
// const wz = 0;

// // Differential scale difference
// const ms = 0;

// const dB = (Bd, Ld, H) => {
//   const B = (Bd * Pi) / 180;
//   const L = (Ld * Pi) / 180;
//   const M = Math.pow((a * (1 - e2)) / Math.pow(1 - e2 * Math.sin(B), 2), 1.5);
//   const N = Math.pow(a * (1 - Math.pow(e2 * Math.sin(B)), 2), -0.5);

//   return (
//     (ro / (M + H)) *
//       ((N / a) * e2 * Math.sin(B) * Math.cos(B) * da +
//         (Math.pow(Math.pow(N, 2 / a, 2 + 1)) * N * Math.sin(B) * Math.cos(B) * de2) / 2 -
//         (dx * Math.cos(L) + dy * Math.sin(L)) * Math.sin(B) +
//         dz * Math.cos(B)) -
//     wx * Math.sin(L) * (1 + e2 * Math.cos(2 * B)) +
//     wy * Math.cos(L) * (1 + e2 * Math.cos(2 * B)) -
//     ro * ms * e2 * Math.sin(B) * Math.cos(B)
//   );
// };

// // Function dB(Bd, Ld, H) As Double
// //     Dim B, L, M, N As Double
// //     B = Bd * Pi / 180
// //     L = Ld * Pi / 180
// //     M = a * (1 - e2) / (1 - e2 * Math.sin(B) ^ 2) ^ 1.5
// //     N = a * (1 - e2 * Math.sin(B) ^ 2) ^ -0.5
// //     dB = ro / (M + H) * (N / a * e2 * Math.sin(B) * Math.cos(B) * da _ + (N ^ 2 / a ^ 2 + 1) * N * Math.sin(B) * Math.cos(B) * de2 / 2 _ - (dx * Math.cos(L) + dy * Math.sin(L)) * Math.sin(B) + dz * Math.cos(B)) _ - wx * Math.sin(L) * (1 + e2 * Math.cos(2 * B)) _ + wy * Math.cos(L) * (1 + e2 * Math.cos(2 * B)) _ - ro * ms * e2 * Math.sin(B) * Math.cos(B)
// // End Function

// // Function dL(Bd, Ld, H) As Double
// //     Dim B, L, N As Double
// //     B = Bd * Pi / 180
// //     L = Ld * Pi / 180
// //     N = a * (1 - e2 * Math.sin(B) ^ 2) ^ -0.5
// //     dL = ro / ((N + H) * Math.cos(B)) * (-dx * Math.sin(L) + dy * Math.cos(L)) _ + Math.tan(B) * (1 - e2) * (wx * Math.cos(L) + wy * Math.sin(L)) - wz
// // End Function

// // Function WGS84Alt(Bd, Ld, H) As Double
// //     Dim B, L, N, dH As Double
// //     B = Bd * Pi / 180
// //     L = Ld * Pi / 180
// //     N = a * (1 - e2 * Math.sin(B) ^ 2) ^ -0.5
// //     dH = -a / N * da + N * Math.sin(B) ^ 2 * de2 / 2 _ + (dx * Math.cos(L) + dy * Math.sin(L)) * Math.cos(B) + dz * Math.sin(B) _ - N * e2 * Math.sin(B) * Math.cos(B) * (wx / ro * Math.sin(L) - wy / ro * Math.cos(L)) _ + (a ^ 2 / N + H) * ms
// //     WGS84Alt = H + dH
// // End Function

// // const SK42_WGS84_Long = (Bd, Ld, H) => {
// //   return Ld + dL(Bd, Ld, H) / 3600;
// // };

// // // Function SK42_WGS84_Long(Bd, Ld, H) As Double
// // //     SK42_WGS84_Long = Ld + dL(Bd, Ld, H) / 3600
// // // End Function

// // const WGS84_SK42_Long = (Bd, Ld, H) => {
// //   return Ld - dL(Bd, Ld, H) / 3600;
// // };

// // // Function WGS84_SK42_Long(Bd, Ld, H) As Double
// // //     WGS84_SK42_Long = Ld - dL(Bd, Ld, H) / 3600
// // // End Function

// // const SK42_WGS84_Lat = (Bd, Ld, H) => {
// //   return Bd + dB(Bd, Ld, H) / 3600;
// // };

// // Function SK42_WGS84_Lat(Bd, Ld, H) As Double
// //     SK42_WGS84_Lat = Bd + dB(Bd, Ld, H) / 3600
// // End Function

// export const WGS84toSK42Lat = (Bd, Ld, H = 1) => {
//   console.log(Bd, Ld, dB(Bd, Ld, H));
//   return Bd - dB(Bd, Ld, H) / 3600;
// };

// // Function WGS84_SK42_Lat(Bd, Ld, H) As Double
// //     WGS84_SK42_Lat = Bd - dB(Bd, Ld, H) / 3600
// // End Function

// export const convertWGS84toSK42 = (B, L) => {
//   return WGS84toSK42Lat(B, L);
// };

// const coordsTransform = (from, to, transformParams) => {
const PI = 3.14159265358979;
const ro = 206264.8062;

// Ellipsoid krass
const aP = 6378245; // Major semi-axis
const alP = 1 / 298.3; // compression
const e2P = 2 * alP - Math.pow(alP, 2); // Square of eccentricity

// Ellipsoid WGS84
const aW = 6378137; // Major semi-axis
const alW = 1 / 298.257223563; // compression
const e2W = 2 * alW - Math.pow(alW, 2); // Square of eccentricity

// Auxiliary values ​​for ellipsoid transformation
const A = (aP + aW) / 2;
const e2 = (e2P + e2W) / 2;
const dA = aW - aP;
const de2 = e2W - e2P;

// Linear transform elements, in meters
const dx = 23.92;
const dy = -141.27;
const dz = -80.9;

// Transform corner elements, in seconds
const wx = 0;
const wy = 0;
const wz = 0;

// Differential scale difference
const m = 0;

export const transform = (lat, lon, H = 0) => {
  const B = (lat * PI) / 180;
  const L = (lon * PI) / 180;

  const M = A * (1 - e2) * Math.pow(1 - e2 * Math.pow(Math.sin(B), 2), -1.5);
  const N = A * Math.pow(1 - e2 * Math.pow(Math.sin(B), 2), -0.5);

  const dB =
    (ro / (M + H)) *
      ((N / A) * e2 * Math.sin(B) * Math.cos(B) * dA +
        ((Math.pow(N, 2) / Math.pow(A, 2) + 1) * N * Math.sin(B) * Math.cos(B) * de2) / 2 -
        (dx * Math.cos(L) + dy * Math.sin(L)) * Math.sin(B) +
        dz * Math.cos(B)) -
    wx * Math.sin(L) * (1 + e2 * Math.cos(2 * B)) +
    wy * Math.cos(L) * (1 + e2 * Math.cos(2 * B)) -
    ro * m * e2 * Math.sin(B) * Math.cos(B);

  const dL =
    (ro / (N + H) / Math.cos(B)) * (-dx * Math.sin(L) + dy * Math.cos(L)) +
    Math.tan(B) * (1 - e2) * (wx * Math.cos(L) + wy * Math.sin(L)) -
    wz;

  const dH =
    (-A / N) * dA +
    (N * Math.sin(B) * Math.sin(B) * de2) / 2 +
    (dx * Math.cos(L) + dy * Math.sin(L)) * Math.cos(B) +
    dz * Math.sin(B) -
    N * e2 * Math.sin(B) * Math.cos(B) * ((wx / ro) * Math.sin(L) - (wy / ro) * Math.cos(L)) +
    ((A * A) / N + H) * m;

  return [lat + dB / 3600, lon + dL / 3600, H + dH];
};
// };
