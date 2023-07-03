function calculateImageSize() {

    //get input Value from the element

    const width =parseFloat(document.getElementById('width').value);
    const height =parseFloat(document.getElementById('height').value);
    const bit =parseFloat(document.getElementById('bit').value);

    //Calculate size formula

    const imageSize = ((width * height * bit) / 3)/1024/1024;

    //display the result 

    document.getElementById('result').innerText = `Image File Size: ${imageSize.toFixed(2)}`;



}

//attach the event lister to the calulate button
document.getElementById('calculateBtn').addEventListener('click', calculateImageSize);