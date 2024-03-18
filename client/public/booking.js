// fetch data from database
const dataVilla = async () => {
  try {
    const response = await fetch("http://localhost:3000/getDataVilla");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error({
      message: "error",
    });
  }
};

// create card
const displayData = async () => {
  const cardBooking = document.getElementById("card");
  const data = await dataVilla();
  data.forEach((item) => {
    const cardHtml = `<div class="card">
    <div class="row">
      <div class="col-lg-5" style="padding-right: 0px">
        <div class="card-body">
          <img
            src="${item.img_villa}"
            class="img-booking"
            alt="room-arjuna"
          />
        </div>
      </div>
      <div class="col-lg-7 p-0 d-flex justify-content-end">
        <div class="card-body card-img">
          <div class="col-lg-10 p-0">
            <div class="graharusni d-flex">
              <div>Graharusni</div>
              <div class="col-lg-12 d-flex justify-content-end">
                <a href="#">ROOM DETAILS</a>
              </div>
            </div>
          </div>
          <div class="type-villa pt-4 m-0">${item.name_villa} </div>
          <div class="col-lg-12 p-0">
            <div class="facilites d-flex">
              <img
                src="./assets/size-icon.svg"
                alt="sizebedroom-icon"
                class="icon-size"
              />
              <div class="des-facilities">298 sqm</div>
              <img
                src="./assets/view-icon.svg"
                alt="view-icon"
                class="icon-view"
              />
              <div class="des-facilities">Ocean View</div>

              <img
                src="./assets/bed.png"
                alt="view-icon"
                class="icon-bed"
              />
              <div class="des-facilities">King/Twin</div>
              <img
                src="./assets/person.png"
                alt="view-icon"
                class="icon-person"
              />
              <div class="des-facilities">Max 3 Adults</div>
            </div>
            <div class="col-lg-12 p-0 pt-5">
              <div class="price-detail d-flex">
                <div class="d-block col-lg-4 p-0">
                  <div style="font-size: 12px">Start Form</div>
                  <p class="m-0">Rp ${item.price_pernight} /night</p>
                </div>
                <div class="col-lg-8 d-flex justify-content-end">
                  <div class="btn btn-select-villa">Select</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    cardBooking.innerHTML += cardHtml;
  });
};

window.onload = function () {
  displayData();
};
