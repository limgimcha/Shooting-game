
var mugi_gangT = 0;
var tempM = 0;
var matT = [0, 0, 0, 0, 0, 0];
var gT = 0;
var iT = 100;
var imT = 0;
var tempG = 0;
var tempI = 0;
var tempIm = 0;
var tempH = 0;
var hT = 0;



function loadFile() {
    what_gang = mugi_gangT;
    mugiNow = mugi[what_gang];
    for (var i = 0; i < 6; i++) {
        mat[i] = matT[i];
    }
    gold = gT;
    inventoryMax = iT;
    myInv = imT;
    pT = password;
    heo = hT;
    monsters[0].hp = 1000 + hT;
    monsters[0].maxHp = 1000 + hT;
    document.getElementById("mugi").src = "./resource/img/mugi/" + mugiNow.id + ".png";
}


function openFile(name, password) {

    var fileName = document.URL.toString().substring(7);
    fileName = fileName.substring(0, fileName.indexOf("!")) + "save\\" + name;
    var fileObject = new ActiveXObject("Scripting.FileSystemObject");
    if (!fileObject.FileExists(fileName)) {
        alert("세이브파일이 없습니다");
    } else {
        var fOpen = fileObject.OpenTextFile(fileName, 1);
        temp = fOpen.ReadLine();
        pT = base64Decode(temp.substring(0, temp.indexOf("@")));

        if (password == pT) {
            temp = fOpen.ReadLine();
            mugi_gangT = Number(base64Decode(temp.substring(0, temp.indexOf("!"))));
            for (var i = 0; i < 6; i++) {
                temp = fOpen.ReadLine();
                matT[i] = Number(base64Decode(temp.substring(0, temp.indexOf("#"))));
            }

            temp = fOpen.ReadLine();
            gT = Number(base64Decode(temp.substring(0, temp.indexOf("$"))));
            temp = fOpen.ReadLine();
            iT = Number(base64Decode(temp.substring(0, temp.indexOf("%"))));
            temp = fOpen.ReadLine();
            imT = Number(base64Decode(temp.substring(0, temp.indexOf("^"))));
            temp = fOpen.ReadLine();
            hT = Number(base64Decode(temp.substring(0, temp.indexOf("&"))));


            fOpen.close();
        } else {
            alert("비밀번호 틀림");
        }
    }


}

/*
function writeFileRank(name,ganghwa){
    if(name=="") return false;
    var defaultpath = document.URL.toString().substring(7);
    var defaultpath = defaultpath.substring(0,defaultpath.indexOf("!"))+"\\save";
    var fileObject = new ActiveXObject("Scripting.FileSystemObject");
    var fullpath=defaultpath+"\\"+name;
    if(!fileObject.FileExists(fullpath)){
    var fWrite = fileObject.CreateTextFile(fullpath,false);    
    } else {
    var fWrite = fileObject.CreateTextFile(fullpath,true);
    }
    var fOpen = fileObject.OpenTextFile(fileName,1);
    
    fWrite.close();
    
    temp = fOpen.ReadLine();
    for(var i=0; i<;i++){
    rank +=  Number(base64Decode(temp.substring(0,temp.indexOf("_"))));
    temp = fOpen.ReadLine();
    }
    rank2 +=  Number(base64Decode(temp.substring(0,temp.indexOf("+"))));
    var fWrite = fileObject.OpenTextFile(fullpath,8);
    
    var savecode = String(name);
    rank+= savecode;
    fWrite.writeLine(base64Encode(savecode)+"_");
    
    var savecode = String(ganghwa);
    ran2+= savecode;
    fWrite.writeLine(base64Encode(savecode)+"+");

    alert("저장성공!");

}
*/


function writeFile(name, tempM, password, tempMat, tempG, tempI, tempIm, tempH) {
    if (name == "") return false;
    var defaultpath = document.URL.toString().substring(7);
    var defaultpath = defaultpath.substring(0, defaultpath.indexOf("!")) + "\\save";
    var fileObject = new ActiveXObject("Scripting.FileSystemObject");
    var fullpath = defaultpath + "\\" + name;
    if (!fileObject.FileExists(fullpath)) {
        var fWrite = fileObject.CreateTextFile(fullpath, false);
    } else {
        var fWrite = fileObject.CreateTextFile(fullpath, true);
    }

    fWrite.close();
    var fWrite = fileObject.OpenTextFile(fullpath, 8);

    var savecode = String(password);
    fWrite.writeLine(base64Encode(savecode) + "@");

    var savecode = String(tempM);
    fWrite.writeLine(base64Encode(savecode) + "!");

    for (var i = 0; i < 6; i++) {
        var savecode = String(tempMat[i]);
        fWrite.writeLine(base64Encode(savecode) + "#");
    }

    var savecode = String(tempG);
    fWrite.writeLine(base64Encode(savecode) + "$");
    var savecode = String(tempI);
    fWrite.writeLine(base64Encode(savecode) + "%");
    var savecode = String(tempIm);
    fWrite.writeLine(base64Encode(savecode) + "^");
    var savecode = String(tempH);
    fWrite.writeLine(base64Encode(savecode) + "&");
    fWrite.close();
    alert("저장성공!");

}


