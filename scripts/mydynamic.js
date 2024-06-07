document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
    const windowFeatures = "left=100,top=100,width=320,height=320";
    //songs and urls based on some selection.
    const d = new Date();
    let day = d.getDay()    

    switch (day) {
        case 0: 
            songURL = "https://www.youtube.com/watch?v=LQdUReWlZws";
            break;
        case 1:
            songURL = "https://www.youtube.com/watch?v=LQdUReWlZws";
            break;
        case 2:
            songURL = "https://www.youtube.com/watch?v=LQdUReWlZws";
            break;
        case 3:
            songURL = "https://www.youtube.com/watch?v=dBDkYofMUs4";
            break;
        case 4:
            songURL = "https://www.youtube.com/watch?v=LQdUReWlZws";
            break;
        case 5:
            songURL = "https://www.youtube.com/watch?v=LQdUReWlZws";
            break;
        case 6:
            songURL = "https://www.youtube.com/watch?v=LQdUReWlZws";
            break;
        default:
            songURL = "https://www.youtube.com/watch?v=LQdUReWlZws";
            break;
    }

    const handle = window.open(songURL,windowFeatures,);
    yourVote = "YouTube URL for song of the day is " + songURL;
    document.getElementById("myvote").innerHTML = yourVote;
}