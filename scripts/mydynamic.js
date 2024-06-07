document.getElementById("songofday").addEventListener("click", myFunction);

function myFunction() {
    const windowFeatures = "left=100,top=100,width=320,height=320";

    const d = new Date();
    let day = d.getDay()    

    switch (day) {
        case 0: 
            songURL = "https://youtu.be/82cJgPXU-ik?si=nJoQUkDhjWigCWNX";
            break;
        case 1:
            songURL = "https://youtu.be/ma9I9VBKPiw?si=6dyPInvqM11Q8Bll";
            break;
        case 2:
            songURL = "https://youtu.be/z1rYmzQ8C9Q?si=hFpcB7wNFUlSVHBx";
            break;
        case 3:
            songURL = "https://youtu.be/LYU-8IFcDPw?si=JTTelS6Y2_9CEqc-";
            break;
        case 4:
            songURL = "https://youtu.be/Zi_XLOBDo_Y?si=bgbuqjBdhEUbaFwt";
            break;
        case 5:
            songURL = "https://youtu.be/8WEtxJ4-sh4?si=tddUlur6miPpNToD";
            break;
        case 6:
            songURL = "https://youtu.be/_CL6n0FJZpk?si=DwDjfDbMncQiFp_B";
            break;
        default:
            songURL = "https://youtu.be/D6i9_LQQ-x0?si=oLV72VgRvTp6FatA";
            break;
    }

    const handle = window.open(songURL,windowFeatures,);
    // yourVote = songURL;
    document.getElementById("myvote").innerHTML = yourVote;
}