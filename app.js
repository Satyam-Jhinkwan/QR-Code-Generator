const qrInput = document.getElementById("qrInput");
const qrImage = document.getElementById("qrImage");
const qrContainer = document.getElementById("qrContainer");
const downloadBtn = document.getElementById("downloadBtn");

function generateQr() {
  const inputValue = qrInput.value.trim();
  if (inputValue === "") {
    alert("Please enter a text or a URL");
    return;
  }

  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    inputValue
  )}`;

  qrImage.src = qrApiUrl;
  qrImage.style.display = "block";
  downloadBtn.style.display = "block";
  downloadBtn.onclick = () => downloadQr(qrApiUrl);
}

function downloadQr(qrUrl) {
  const link = document.createElement("a");
  link.href = qrUrl;
  link.download = "qrcode.png";
  link.click();
}
