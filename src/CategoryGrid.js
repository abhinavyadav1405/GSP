const startListening = () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'hi-IN'; // Set to Hindi
  recognition.start();
  
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('problem-input').value = transcript;
  };
};

// Add this button next to your input field
<button type="button" onClick={startListening} className="ml-2">
  🎤 Speak
</button>
