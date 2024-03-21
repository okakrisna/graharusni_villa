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

const displayDataVilla = async () => {
  const card = document.getElementById("admin");
  const data = await dataVilla();
  data.forEach((item) => {
    const cardHtml = `<div class="card card-body">
    <div class="id">id: ${item.id}</div>
    <div class="namevilla">name: ${item.name_villa}</div>
    <div class="description">Description: ${item.description}</div>
    <div class="location">location: ${item.location}</div>
    <div class="type_villa">type villa: ${item.type_villa}</div>
    <div class="facilities">facilities: ${item.facilities}</div>
    <div class="total_bedroom">total bedroom: ${item.total_bedroom}</div>
    <div class="capacity">capacity: ${item.capacitu}</div>
    <div class="price_pernight">price pernight: ${item.price_pernight}</div>
    <div class="img_villa">img villa:</div>
  </div>`;
    card.innerHTML += cardHtml;
  });
};

document
  .getElementById("villaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name_villa = document.getElementById("name_villa").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const type_villa = document.getElementById("type_villa").value;
    const facilities = document.getElementById("facilities").value;
    const total_bedroom = document.getElementById("total_bedroom").value;
    const capacity = document.getElementById("capacity").value;
    const price_pernight = document.getElementById("price_pernight").value;
    const img_villa = document.getElementById("img_villa").value;

    const newVilla = {
      name_villa,
      description,
      location,
      type_villa,
      facilities,
      total_bedroom,
      capacity,
      price_pernight,
      img_villa,
    };

    console.log(newVilla);

    const formData = new FormData(this);
    console.log(formData);

    fetch("/admin", {
      method: "POST",
      body: newVilla,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Terjadi kesalahan saat mengirim data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });

const openFormBtn = document.getElementById("openFormBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const villaFormPopup = document.getElementById("villaFormPopup");

openFormBtn.addEventListener("click", function () {
  villaFormPopup.style.display = "block";
});

closeFormBtn.addEventListener("click", function () {
  villaFormPopup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == villaFormPopup) {
    villaFormPopup.style.display = "none";
  }
});

window.onload = function () {
  displayDataVilla();
};

// const dataAdmin = document.getElementById("admin");
