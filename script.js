
        function fun1() {
            let section = document.getElementById("main1ss");
            section.style.display = "none";

            let section2 = document.getElementById("main2ss");
            section2.style.display = "block";
        }

        function inp(inp1) {
            let value = inp1.value;
            let newValue = value + " :";
            let a = value;
            document.getElementById("para1").innerHTML = newValue;
            document.getElementById("para1img1").innerHTML = a;
        }

        function inp1(inp1) {
            let value = inp1.value;
            let newValue = value + " :";
            let a = value;
            document.getElementById("para2").innerHTML = newValue;
            document.getElementById("para2img2").innerHTML = a;
        }

        let player1 = 0;
        let player2 = 0;
        function Roll() {
         
            let sum = 1;
            let img1 = document.getElementById("img1s");
            let img2 = document.getElementById("img2s");
            let result = document.getElementById("head");
            let a = document.getElementById("para1img1").innerHTML;
            let b = document.getElementById("para2img2").innerHTML;

            let c = document.getElementById("para1").innerHTML;
            let d = document.getElementById("para2").innerHTML;


            let randomnum1 = Math.floor(Math.random() * 6) + 1;
            let randomnum2 = Math.floor(Math.random() * 6) + 1;

            img1.src = ""+randomnum1 + ".png";
            img2.src = ""+randomnum2 + ".png";

            // img1.setAttribute("src", "" + randomnum1 + ".png");
            // img2.setAttribute("src", "" + randomnum2 + ".png");

            if (randomnum1 === randomnum2) {
                result.innerHTML = "Match draw!";
                player1++;
                player2++;
                document.getElementById("para1").innerHTML = a+ ":"+player1;
                document.getElementById("para2").innerHTML = b+ ":"+player2;

            } else if (randomnum1 < randomnum2) {        
                result.innerHTML = b+" won";
                player2++;
                document.getElementById("para1").innerHTML = a+ ":"+player1;
                document.getElementById("para2").innerHTML = b+ ":"+player2;

            } else {
                result.innerHTML = a+" won";
                player1++;
                document.getElementById("para1").innerHTML = a+":"+player1;
                document.getElementById("para2").innerHTML = b+":"+player2;
            }
        }

        function Reset() {
    // Reset player names to empty
   let a =  document.getElementById("para1img1");
   let b =  document.getElementById("para2img2");
    document.getElementById("inp1");
    document.getElementById("inp2");
    document.getElementById("para1").innerHTML =a.value+":"+0;
    document.getElementById("para2").innerHTML=b.value + ":"+0;
    document.getElementById("head").innerHTML = "";
    // Reset player images to 1.png
    document.getElementById("img1s").src = "1.png";
    document.getElementById("img2s").src = "1.png";

    // Reset win counts to 0
    let player1 = 0;
    let player2 = 0;
}

