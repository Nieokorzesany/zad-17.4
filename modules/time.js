function getTime(time) {
  var restOFTime = time;
  var hours = Math.floor(time / 3600);
  //console.log(hours);
  restOFTime = restOFTime - hours * 3600;
  var mintues = Math.floor(restOFTime / 60);
  //console.log(mintues);
  restOFTime = restOFTime - mintues * 60;
  var seconds = restOFTime;
  //console.log(seconds);
  console.log(
    "Uptime true: ~",
    hours + " hours " + mintues + " minutes " + seconds + " seconds"
  );
}

exports.time = getTime;
