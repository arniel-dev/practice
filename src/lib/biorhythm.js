import dayjs from "dayjs";

export function calculateBiorhythms(birthDate, targetDate) {
  return {
    physical: calculateBiorhythm(birthDate, targetDate, 23),
    emotional: calculateBiorhythm(birthDate, targetDate, 28),
    intellectual: calculateBiorhythm(birthDate, targetDate, 33),
  };
}
function calculateBiorhythm(birthDate, targetDate, dayCycle) {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, "day");
  const compute = Math.sin((2 * Math.PI * diff) / dayCycle);
  return parseFloat(compute.toFixed(4));
}
