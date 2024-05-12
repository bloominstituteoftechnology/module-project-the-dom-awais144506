function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section>div")
  widgets.forEach((item,idx) => {
    item.classList.add("widget")
    item.setAttribute("tabindex",idx+1)
  })
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const getIndex = Math.floor(Math.random() * quotes.length)
  const getQuote = quotes[getIndex]
  //Fetched Objects Properties below
  const quoteText = getQuote.quote
  const { author, date } = getQuote

  // Show on DOM
  const createDivQoute = document.createElement("div")
  createDivQoute.textContent = quoteText
  const createDivQouteAuthor = document.createElement("div")
  createDivQouteAuthor.textContent = `${author} in ${date ? date : "an unknown date"}`

  document.querySelector(".quoteoftheday").append(createDivQoute)
  document.querySelector(".quoteoftheday").append(createDivQouteAuthor)
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here.
  const randomAdVerb = Math.floor(Math.random() * adverbs.length)
  const getAdVerb = adverbs[randomAdVerb]
  const randomNoun = Math.floor(Math.random() * nouns.length)
  const getNoun = nouns[randomNoun]
  const randomVerb = Math.floor(Math.random() * verbs.length)
  const getVerb = verbs[randomVerb]
  const textContentSpeak = document.createElement("p")
  textContentSpeak.textContent = `We need to ${getVerb} our ${getNoun} ${getAdVerb} in order to ${getVerb} our ${getNoun} ${getAdVerb}.`
  document.querySelector(".corporatespeak").append(textContentSpeak)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector(".countdown")
  let count = 5
  const timeText = document.createElement("p")
  timeText.textContent = `T-minus ${count}...`
  countdownWidget.appendChild(timeText)
  const updateTime = () => {
    if (count === 1) {

      timeText.textContent = `Liftoff! 🚀`
      clearInterval(countInterval)
    }
    else {
      count--
      timeText.textContent = `T-minus ${count}...`
    }
  }
   const countInterval = setInterval(updateTime, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
    const getAccessWidgetElement = document.querySelector(".friends")
    const createFriendsElement = document.createElement("p")
    const getPerson = Math.floor(Math.random()*people.length)
    const randomPeople = people[getPerson]
    const yearOfBirth = randomPeople.dateOfBirth.split("-") [0]
    let sentence = `${randomPeople.fname} ${randomPeople.lname} was born in ${yearOfBirth} and `
    if(!randomPeople.friends.length)
      {
        sentence += `has no friends.`
       }
       else
       {
        sentence += 'is friends with '
        for(let i = 0; i<randomPeople.friends.length;i++)
          {
            const friendList = randomPeople.friends[i]
            const friend = people.find(p=>p.id === friendList)
            const fullName = `${friend.fname} ${friend.lname}`
            let isLastIndex = i === randomPeople.friends.length-1
            let isNextToLastIndex= i === randomPeople.friends.length-2

            if(isLastIndex)
              {
                sentence +=`${fullName}.`
              }
              else if(isNextToLastIndex)
                {
                  sentence +=`${fullName} and `
                }
                else
                {
                  sentence +=`${fullName}, `
                }
          }
       }
    createFriendsElement.textContent = sentence
    getAccessWidgetElement.append(createFriendsElement)
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
