//timer function
export const secondsToTime = (milisecs) => {
  const secs = milisecs / 1000;
  let minutes = Math.floor(secs / 60);
  let seconds = secs % 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
};
