const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();

  let amPm = "AM";

  // let hours = String(date.getHours()).padStart(2, "0");
  let hours = date.getHours();

  if (hours >= 12) amPm = "PM";

  if (hours >= 13) {
    hours %= 12;
    // hours = hours % 12;
  }

  // let hours2 = date.getHours() >= 13 ? date.getHours() % 12 : date.getHours();

  hours = String(hours).padStart(2, "0");

  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${amPm} ${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);

const QUOTES_LIST = "quotesList";

function getQuotes() {
  const quotes = document.querySelector(".quotes");

  let savedQuotes = localStorage.getItem("QUOTES_LIST");

  if (!savedQuotes) {
    localStorage.setItem("quotesList", JSON.stringify(["열심히 살자!"]));

    savedQuotes = localStorage.getItem("quotesList");
  }

  let parsedQuotes = JSON.parse(savedQuotes);

  quotes.innerText =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
}

getQuotes();

// 없으면 기본적으로 하나 생성

// quotes.innerHTML = "<h1 style='background-color: red;'>화이팅!!!</h1>";

function onClickNewQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");
  const newQuotesInput = document.querySelector(".new-quotes-input");

  if (!newQuotesInput.value) return;

  // 로컬 스토리지에 저장
  let savedQuotes = localStorage.getItem("quotesList");
  let parsedQuotes = JSON.parse(savedQuotes);

  parsedQuotes.push(newQuotesInput.value);

  localStorage.setItem("quotesList", JSON.stringify(parsedQuotes));

  // 현재 페이지 반영
  quotes.innerText = newQuotesInput.value;
  newQuotesInput.value = "";

  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");

  quotes.style.display = "none";
  newQuotes.style.display = "block";
}

async function getNft() {
  const nftImg = document.querySelector(".nft-img");
  const nftName = document.querySelector(".nft-name");
  const nftDesc = document.querySelector(".nft-desc");

  const response = await axios.get(
    "https://olbm.mypinata.cloud/ipfs/QmU42zYpiQ9x4vd16fEg8ZZAKG2kZvV7aTqYWur8xnHs6Y"
  );

  nftImg.src = response.data.image;
  nftName.innerText = response.data.name;
  nftDesc.innerText = resoponse.data.description;
}

getNft();


// https://olbm.mypinata.cloud/ipfs/QmU42zYpiQ9x4vd16fEg8ZZAKG2kZvV7aTqYWur8xnHs6Y