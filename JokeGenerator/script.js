let api = "https://v2.jokeapi.dev/joke/Any?type=single";

const jokeEl = document.getElementById("joke");
const getJokeBtn = document.getElementById("btn");

async function getJoke() {
  try {
    const result = await fetch(api);

    if (!result.ok) {
      throw new Error(`Error HTTP: ${result.status}`);
    }

    const data = await result.json();
    showJoke(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

function showJoke(data) {
  jokeEl.textContent = `${data.joke}`;
}

getJokeBtn.addEventListener("click", getJoke);
