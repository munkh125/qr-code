const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");
const burtgel = document.getElementById("burtgel");

// Button submit
const onGenerateSubmit = (e) => {
  const print = document.getElementById("print");
  e.preventDefault();
  // print.removeChild(print.lastChild);
  clearUI();
  const input_aimag = document.getElementById("input_aimag").value;
  const input_id = document.getElementById("input_id").value;
  const input_option = document.getElementById("input_option").value;
  const input_text = document.getElementById("input_text").value;
  const input_tom = document.getElementById("input_tom").value;
  const size = document.getElementById("size").value;
  const concatenatedText =
    // input_aimag +
    // " " +
    // input_id +
    // " " +
    // input_option +
    // " " +
    // input_tom +
    // " " +
    input_text;
  // Validate url
  if (concatenatedText === "") {
    alert("Please enter a URL");
  } else {
    showSpinner();
    // Show spinner for 1 sec
    setTimeout(() => {
      hideSpinner();
      generateQRCode(concatenatedText, size);
      // showScanner();
      // Generate the save button after the qr code image src is ready
      // setTimeout(() => {
      //   // Get save url
      //   const saveUrl = qr.querySelector("canvas").toDataURL();
      //   // Create save button
      //   // createSaveBtn(saveUrl);
      // }, 50);
    }, 1000);
  }
  const aimagDiv = document.createElement("div");
  const breakline = document.createElement("br");
  const idDiv = document.createElement("div");
  const optionDiv = document.createElement("div");
  const tomDiv = document.createElement("div");
  aimagDiv.textContent = `${input_aimag} №${input_id} ${input_option} ${input_tom}`;
  // idDiv.textContent = `123456789012345678901234567890`;
  // optionDiv.textContent = `${input_option}`;
  // tomDiv.textContent = `${input_tom}`;
  aimagDiv.style.alignSelf = "flex-end";
  // idDiv.style.alignSelf = "flex-end";
  // optionDiv.style.alignSelf = "flex-end";
  // tomDiv.style.alignSelf = "flex-end";
  // burtgel.appendChild(breakline);
  burtgel.appendChild(aimagDiv);
  // burtgel.appendChild(idDiv);
  // burtgel.appendChild(optionDiv);
  // burtgel.appendChild(tomDiv);
};

// Generate QR code
const generateQRCode = (concatenatedText, size) => {
  const qrcode = new QRCode("qrcode", {
    text: concatenatedText,
    width: size,
    height: size,
  });
};

// Clear QR code and save button
const clearUI = () => {
  qr.innerHTML = "";
  burtgel.innerText = "";
  // const saveBtn = document.getElementById("save-link");
  // if (saveBtn) {
  //   saveBtn.remove();
  // }
};

// hide  scanner
// const showScanner = () => {
//   const scanner = document.getElementById("qrCodeContainer");
//   scanner.style.display = "block";
// };

// Show spinner
const showSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";
};

// Hide spinner
const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
};

// Create save button to download QR code as image
// const createSaveBtn = (saveUrl) => {
//   const link = document.createElement("a");
//   link.id = "save-link";
//   link.classList =
//     "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
//   link.innerHTML = "Save Image";

//   link.href = saveUrl;
//   link.download = "qrcode.png";

//   document.getElementById("generated").appendChild(link);
// };

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);

function printDiv(print) {
  var printContents = document.getElementById(print).innerHTML;
  w = window.open();
  w.document.write(printContents);
  w.print();
  w.close();
}
