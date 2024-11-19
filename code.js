const radioBoxEl = document.getElementById("radioBox");

async function getRadioStations() {
  const response = await fetch(
    "http://api.sr.se/api/v2/channels?format=json&size=100"
  );
  const data = await response.json();

  data.channels.forEach((channel) => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const imgBox = document.createElement("div");
    imgBox.setAttribute("class", "imgBox");
    const playerBox = document.createElement("div");
    playerBox.setAttribute("class", "playerBox");
    const channelName = document.createElement("h2");
    const channelPlayer = document.createElement("div");
    channelPlayer.setAttribute("class", "channelPlayer");
    const image = document.createElement("img");
    const audioPlayer = document.createElement("audio");

    channelName.textContent = channel.name;
    image.src = channel.image;
    container.style.backgroundColor = `#${channel.color}`;

    channelPlayer.appendChild(audioPlayer);
    audioPlayer.src = channel.liveaudio.url;
    audioPlayer.controls = true;
    audioPlayer.type = "audio/mpeg";

    imgBox.appendChild(image);
    container.appendChild(imgBox);
    playerBox.appendChild(channelName);
    playerBox.appendChild(channelPlayer);

    container.appendChild(playerBox);

    radioBoxEl.appendChild(container);
  });
}
getRadioStations();
