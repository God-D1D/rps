function rockfunction(){
    document.getElementsByClassName("img1")[0].src="images/rock.JPG"
    
    var randomNum = Math.floor((Math.random()* 3)+1);

    if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.PNG";
    }

    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/rock.JPG";
    }

    else if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF";
    }

}

function paperfunction(){
    document.getElementsByClassName("img1")[0].src="images/paper.JFIF"

    var randomNum = Math.floor((Math.random()* 3)+1);

    if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.PNG";
    }

    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/rock.JPG";
    }

    else if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF";
    }

}

function scissorsfunction(){
    document.getElementsByClassName("img1")[0].src="images/scissors.PNG"

    var randomNum = Math.floor((Math.random()* 3)+1);

    if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.PNG";
    }

    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/rock.JPG";
    }

    else if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF";
    }

}

