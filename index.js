const maxImgNum=9;
let imgNum=4;

document.querySelector('#left').addEventListener('click',()=>{
    left();
});
document.querySelector('#right').addEventListener('click',()=>{
    right()
});
document.addEventListener('keyup',(event)=>{
    if (event.key==='ArrowLeft') {
        left();
    }
    if (event.key==='ArrowRight') {
        right();
    }
});
const left=()=>{
    if (imgNum<maxImgNum)
        imgNum++;
    else
        imgNum=1;
    updateImg();
}
const right=()=>{
    if (imgNum>1)
        imgNum--;
    else
        imgNum=maxImgNum;
    updateImg();
}
const updateImg=()=>{
    let newImgPath='imgs/'+imgNum+'.jpg';
    document.getElementById('rotatableDisplay').src=newImgPath;
}

let spinSpeedRange=document.querySelector('#spinSpeedRange');
let spinSpeed=500;
spinSpeedRange.addEventListener('change',()=>{
    spinSpeed=1600-spinSpeedRange.value;
    clearInterval(spin);
    spin=setInterval(()=>{
        left();
    },spinSpeed);
});

let autoSpinCheckbox=document.querySelector('#autoSpinCheckbox');
let spin;
autoSpinCheckbox.addEventListener('change',()=>{
    if (autoSpinCheckbox.checked) {
        spin=setInterval(()=>{
            left();
        },spinSpeed);
        spinSpeedRange.style.visibility='visible';
    }
    else {
        clearInterval(spin);
        spinSpeedRange.style.visibility='hidden';
    }
});