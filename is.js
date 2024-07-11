const imageSources =['77.jpg','11.jpg','22.jpg','33.jpg','30.jpg','40.jpg','44.jpg','55.jpg','60.jpg','66.jpg','11.jpg','88.jpg'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);