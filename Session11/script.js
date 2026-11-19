function dragElement(HatpersonElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    HatpersonElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        HatpersonElement.style.top = (HatpersonElement.offsetTop - pos2) + 'px';
        HatpersonElement.style.left = (HatpersonElement.offsetLeft - pos1) + 'px';
        
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('hat1'));
dragElement(document.getElementById('hat2'));
dragElement(document.getElementById('hat3'));
dragElement(document.getElementById('hat4'));
dragElement(document.getElementById('hat5'));
dragElement(document.getElementById('hat6'));

const cursor = document.querySelector(".cursor")

document.addEventListener( "mousemove",(mous) => {
const {width,height} = cursor.getBoundingClientRect()
cursor.style.left = `${mous.clientX - width/2}px`
cursor.style.top = `${mous.clientY - width*0.25}px`
})
