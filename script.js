const onClick = document.querySelector('button')

const quotes = [
  ["We all make choices in life, but in the end our choices make us.", "Bioshock"],
  ["Get over here!", "Mortal Kombat"],
  ["What is better? To be born good or to overcome your evil nature through great effort?", "Elder Scrolls V: Skyrim"],
  ["The right man in the wrong place can make all the difference in the world.", "Half Life"],
  ["Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.", "Mass Effect"]
  ["Bring me a bucket, and I'll show you a bucket!", "Borderlands 2"],
  ["Wanting something does not give you the right to have it.", "Assassin’s Creed 2"],
  ["Even in dark times, we cannot relinquish the things that make us human.", "Metro 2033"],
  ["How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we share.", "Half-Life 2"],
  ["The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take... inventory.", "Call of Duty: Modern Warfare 2"]
  ["It’s a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.", "Dishonored"],
  ["A hero need not speak. When he is gone, the world will speak for him.", "Halo"],
  ["No gods or kings. Only man.", "Bioshock"],
  ["Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain’t nothing fair.","Red Dead Redemption"],
  ["You can’t break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.", "Far Cry 2"],
  ["It's time to kick ass and chew bubblegum... and I'm all outta gum.", "Duke Nukem 3D"],
  ["Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended.", "Gears of War 2"],
  ["If our lives are already written, it would take a courageous man to change the script.", "Alan Wake"],
  ["It's easy to forget what a sin is in the middle of a battlefield.", "Metal Gear Solid"],
];
function getQuote(){
  let randomNum = Math.floor(Math.random() * quotes.length);
  console.log(randomNum);
  document.getElementById('displayQuote').innerHTML = quotes[randomNum][0];
  document.getElementById('game').innerHTML = "~" + quotes[randomNum][1] + "~" ;
}

onClick.addEventListener("click", getQuote);
