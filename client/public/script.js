const dataCalender = document.getElementById("dateCalender");

const fp = flatpickr(dataCalender, {
  mode: "range",
  dateFormat: "l, j F",
  minDate: "today",
  numberOfMonths: 2,
  onClose: function (selectedDates, dateStr, instance) {
    if (selectedDates.length === 1) {
      const checkinDate = selectedDates[0];
      const checkoutDate = new Date(checkinDate);
      checkoutDate.setDate(checkinDate.getDate() + 1);

      instance.setDate([checkinDate, checkoutDate]);
    }
  },
});

// mengambil data dari database

console.log("tes");
