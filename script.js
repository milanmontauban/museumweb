const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const myinput = document.getElementById("myinput");

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid":  document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties =[ // array
    { // 0 = object
        "titel":"plaats 0",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1
        }
    },
    {  //1 = object 
        "titel":"plaats 1",
        "image":"img/1.jpg",
        "directions": { // object
            "noord": 0,
            "west": 2,
            "oost": 5,
            "zuid": 4
        }

    },
    {
        "titel":"plaats 2",
        "image":"img/2.jpg",
        "directions": { // object
            "oost": 1,
            "zuid": 3
        }
    },
    {
        "titel":"plaats 3",
        "image":"img/3.jpg",
        "directions": { // object
            "noord": 2
            
        }
    },
    {
        "titel":"plaats 4",
        "image":"img/4.jpg",
        "directions": { // object
            "noord": 1
            
        }
    },
    {
        "titel":"plaats 5",
        "image":"img/5.jpg",
        "directions": { // object
            "west": 1,
            "oost": 6,
            "noord": 10
        }
    },
    {
        "titel":"plaats 6",
        "image":"img/6.jpg",
        "directions": { // object
            "west": 5,
            "oost": 7,
            "zuid": 11
        }
    },
    {
        "titel":"plaats 7",
        "image":"img/7.jpg",
        "directions": { // object
            "west": 6,
            "noord": 9,
            "zuid": 8
        }
    },
    {
        "titel":"plaats 8",
        "image":"img/8.jpg",
        "directions": { // object
            "noord": 7
        }
    },
    {
        "titel":"plaats 9",
        "image":"img/9.jpg",
        "directions": { // object
            "west": 10,
            "zuid": 7
        }
    },
    {
        "titel":"plaats 10",
        "image":"img/10.jpg",
        "directions": { // object
            "oost": 9,
            "zuid": 5
        }
    },
    {
        "titel":"plaats 11",
        "image":"img/11.jpg",
        "directions": { // object
            "noord": 6
        }
    }

]



//mytitle.innerHTML = "dit is gevoegd door java";
//myimage.src = "img/1.jpg";

function show(index){
    mytitle.innerHTML = lokaties[index].titel;
    myimage.src = lokaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){

    let possible = lokaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    console.log(possible);
    console.log(possible_keys);

    let button_keys = Object.keys(directionButtons);
    console.log(button_keys);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }

}

function getinput(){
    show(myinput.value);
    //console.log(myinput.value)
    myinput.value = "";
    myinput.focus();
}

function goDirection(direction){
    let punt_index = lokaties[current_index].directions[direction];
    show(punt_index)
}

show(0)