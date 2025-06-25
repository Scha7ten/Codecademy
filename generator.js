const memeMessages = ["My name is Jeff", "Let me iiiiiiiiiiiiiiin!", "I am the one who knocks", "I am your father", "I am inevitable", "I am Groot", "I am the danger", "I am vengeance, I am the night", "I am Batman", "I am Iron man"];
const inspirationalMessages = ["Believe in yourself", "You are stronger than you think", "Keep pushing forward", "Dream big", "Stay positive", "Never give up", "Embrace the journey", "You are capable of amazing things", "Make today count", "Live life to the fullest"];
const jokes = ["Why did the scarecrow win an award? Because he was outstanding in his field!", "I told my wife she was drawing her eyebrows too high. She looked surprised.", "Why don't scientists trust atoms? Because they make up everything!", "What do you call fake spaghetti? An impasta!", "Why did the bicycle fall over? Because it was two-tired!"];
const messages = [memeMessages, inspirationalMessages, jokes];
const randomMessage = () => {
  const randomCategory = messages[Math.floor(Math.random() * messages.length)];
  const randomIndex = Math.floor(Math.random() * randomCategory.length);
  return randomCategory[randomIndex];
}
const generateMessage = () => { 
    const m1 = randomMessage();
    const m2 = randomMessage();
    const m3 = randomMessage();
    console.log( `${m1}\n${m2}\n${m3}`);
}
generateMessage();