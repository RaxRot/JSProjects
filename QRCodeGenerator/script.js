const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");
const api = " https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=";

async function GenerateQR() {
  let qrValue = qrInput.value;
  if (!qrValue) {
    return;
  }

  generateBtn.innerText = "Generating";

  qrImg.src = await `${api}${qrValue}`;

  qrInput.value = "";
  generateBtn.innerText = "Generate QR Code";
}

generateBtn.addEventListener("click", GenerateQR);
