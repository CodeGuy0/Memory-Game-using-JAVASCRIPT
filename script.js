let cardsArray = [
    {
        'name' : 'CSS',
        'img' : 'images/css_logo.png',

},
{
    'name' : 'HTML',
    'img' : 'images/html_logo.png',


},
{
    'name' : 'jQuery',
    'img' : 'images/jquery_logo.png',

},
{
    'name' : 'JS',
    'img' : 'images/js_logo.png',

},
{
    'name' : 'Node',
    'img' : 'images/node_logo.png',

},
{
    'name' : 'Python',
    'img' : 'images/python_logo.png',


}
];

const parentDiv = document.querySelector('#card-section');

// To Duplicate Each Card

const gameCard = cardsArray.concat(cardsArray);
console.log(gameCard);

let shuffleChild = Array.from(gameCard).sort(()=>0.5-Math.random());

let clickcount = 0;
let firstcard = "";
let secondcard = "";


// styling the match card
const card_matches = () => {

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem)=>{
        curElem.classList.add('card_match');
    })


}


const resetGame = () => {
    firstcard = "";
    secondcard = "";
    clickcount = 0;

    let card_selected = document.querySelectorAll ('.card_selected');

    card_selected.forEach((curElem)=>{
        curElem.classList.remove('card_selected');
    })

}



parentDiv.addEventListener('click', (event)=>{
    let curCard = event.target;

    if(curCard.id === "card-section"){return false}

    clickcount ++;


    if(clickcount < 3){

        if(clickcount === 1){
            firstcard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        } else {
            secondcard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstcard !== "" && secondcard !== ""){
            if(firstcard === secondcard){
                //curCard.classList.add('card_match');
                setTimeout(()=>{

                    card_matches();
                    resetGame();

                },1000)
                
            }else {
                setTimeout(()=>{

                    resetGame();

                },1000)
            }
        }


    }

})



for(let i=0; i<shuffleChild.length; i++){
    const childDiv = document.createElement('div');
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffleChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffleChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');

    back_div.style.backgroundImage = `url(${shuffleChild[i].img})`;




    parentDiv.appendChild(childDiv);

    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);


}
