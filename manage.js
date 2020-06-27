
document.querySelector("#btn").onclick = function (e) {
    let inp = document.querySelector("#usr");
    
    function reqListener() {
        console.log(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", `https://api.mojang.com/users/profiles/minecraft/${inp.value}`);
    oReq.send();
    console.log(this.files);
    let reader = new FileReader();
    reader.onload = (e) => {
        function drawimg(idata) {
            let c = document.querySelector("#c");
            let ctx = c.getContext('2d');
            var img = new Image();
            img.onload = function () {
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
            };
            img.src = idata;
        }
        drawimg(e.target.result);
        //sdocument.body.append(img);
    }
    reader.readAsDataURL(this.files[0]);
}
