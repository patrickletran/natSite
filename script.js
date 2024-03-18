function showPrompt() {
    fetch(newPath) // Replace 'message.txt' with the path to your text file
        .then(response => response.text())
        .then(data => {
            document.getElementById("message").innerText = data;
            document.getElementById("overlay1").style.display = "block";
        })
        .catch(error => console.error('Error fetching message:', error));
}

function closePrompt() {
    document.getElementById("overlay1").style.display = "none";
}

function loadMessage(date) {
    fetch('messages/' + date + '.txt') // Adjust the path as needed
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            newPath = 'messages/' + date + '.txt';
            return response.text();
        })
        .then(data => {
            // Update the message box with the content of the text file
            document.getElementById("message").innerText = data;
            // Show the message box
            // document.getElementById("overlay").style.display = "block";
        })
        .catch(error => console.error('Error fetching message:', error));
}

function loadAudio(date) {
  fetch('audios/' + date + '.mp3') // Adjust the path as needed
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          newAudio = 'audios/' + date + '.mp3';
      })
      .then(data => {
          // Update the message box with the content of the text file
          //document.getElementById("message").innerText = data;
          // Show the message box
          // document.getElementById("overlay").style.display = "block";
      })
      .catch(error => console.error('Error fetching message:', error));
}

function showPrompt2() {
  // Create an audio element
  var audioElement = document.createElement("audio");
  audioElement.controls = true;

  // Create a source element and set its attributes
  var sourceElement = document.createElement("source");
  sourceElement.src = newAudio; // Path to your audio file
  sourceElement.type = "audio/mpeg";

  // Append the source element to the audio element
  audioElement.appendChild(sourceElement);

  // Clear previous audio player and append the audio element to the message box
  var audioPlayer = document.getElementById("overlay2").querySelector(".prompt #audio-player");
  audioPlayer.innerHTML = ''; 
  audioPlayer.appendChild(audioElement);

  // Show the audio player
  audioPlayer.style.display = "block";

  // Show the overlay
  document.getElementById("overlay2").style.display = "block";
}

function closePrompt2() {
  document.getElementById("overlay2").style.display = "none";
}
