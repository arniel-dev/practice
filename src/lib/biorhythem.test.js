import { calculateBiorhythms } from "./biorhythm";

it("calculates the physical biorhytm", () => {
  const biorhythms = calculateBiorhythms("1999-12-31", "2022-12-31");
  expect(biorhythms.physical).toBe(0.9977);
});
it("calculates the emotional biorhytm", () => {
  const biorhythms = calculateBiorhythms("1999-12-31", "2022-12-31");
  expect(biorhythms.emotional).toBe(0.2225);
});
it("calculates the intellectual biorhytm", () => {
  const biorhythms = calculateBiorhythms("1999-12-31", "2022-12-31");
  expect(biorhythms.intellectual).toBe(-0.4582);
});
