function timeConversion(s) {
  s = s.split(":");

  let hour = parseInt(s[0]);
  let res = "";

  if (hour < 12 && s[2].includes("PM")){
    hour += 12;
  } 

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (hour == 12 && s[2].includes("AM")) {
    hour = "00";
  }

  res = `${hour}:${s[1]}:${s[2]}`;
  res = res.includes("AM") 
  ? res.replace("AM", "")
  : res.replace("PM", "");

  return res;
}