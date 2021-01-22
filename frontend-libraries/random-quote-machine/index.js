
    const quoteTextBox = document.querySelector('#text')
    const authorTextBox = document.querySelector('#author');
    const nextBtn = document.querySelector('#new-quote');
  
  const getQuote = () =>fetch("https://api.quotable.io/random")
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    const quote = data.content;
    const author = data.author
    authorTextBox.textContent = `-${author}`; 
    quoteTextBox.textContent = quote;
  })
  .catch(err=>console.log(err))
  nextBtn.addEventListener('click', getQuote)
  
  getQuote();