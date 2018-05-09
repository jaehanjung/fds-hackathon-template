$("#inputBox").keypress(function(event) {
  if (
    event.which &&
    (event.which <= 1 || event.which >= 9) &&
    event.which != 8
  ) {
    event.preventDefault();
  }
});
