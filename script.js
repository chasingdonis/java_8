//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});


  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  };

function getAuthorAndYearString(speech){
ConsoleDisplay.innerHTML = 'This speech was written by ' + speech.author + ' in ' + speech.year + '<br>';}

function displayBCEString(speech){
  if(speech.yearIsBCE === true){
    ConsoleDisplay.innerHTML += '<br>This speech took place before the common era.<br>';
  }else{
    ConsoleDisplay.innerHTML += '<br>This speech took place during the common era.<br>';
  }
};

function getOldestOrYoungestString(speech){
  if(speech.year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML +='<br>This is the oldest speech on the page.<br><br>';
  }
  if(speech.year === newest){
    document.getElementById('ConsoleDisplay').innerHTML +='<br>This is the most recent speech on the page.<br><br>';
  }
};

document.getElementById('BtnChurchill').addEventListener('click', function(){
  getAuthorAndYearString(churchillSpeech);
  displayBCEString(churchillSpeech);
  getOldestOrYoungestString(churchillSpeech);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  getAuthorAndYearString(ghandiSpeech);
  displayBCEString(ghandiSpeech);
  getOldestOrYoungestString(ghandiSpeech);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  getAuthorAndYearString(demosthenesSpeech);
  displayBCEString(demosthenesSpeech);
  getOldestOrYoungestString(demosthenesSpeech);
});

