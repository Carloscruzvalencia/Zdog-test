let shapes = new Zdog.Illustration({
    element: '.zdog-canvas',
    resize: 'midscreen',
    rotate: {
        y: 0,
        x: 0,
        Z: 0
    },
    zoom: 1.5,
})
range = document.getElementById("range");


range.oninput = () => {
    shapes.rotate.y = range.value / 65;
    cubeFrontFace.translate.z = 74 + 74 * shapes.rotate.y;
    if (range.value < 50) {
        cubeTopFace.translate.y = -95 - 95 * shapes.rotate.y;
    } else {
        cubeBottomFace.translate.y == 150;
    }

    if (range.value < 50) {
        cubeBottomFace.translate.y = 95 + 95 * shapes.rotate.y;
    } else {
        cubeBottomFace.translate.y == 150;
    }

    cubeLeftFace.translate.x = 60 + 60 * shapes.rotate.y;
    cuberightFace.translate.x = -60 + -60 * shapes.rotate.y;

    cilinder.translate.z = 85 + 85 * shapes.rotate.y + 15;
    cilinder2.translate.z = 85 + 85 * shapes.rotate.y + 5;

    if (range.value == 0) {
        cilinder.translate.z = 85;
        cilinder2.translate.z = 85;
    }
    cubebackface.translate.z = -70 - 70 * shapes.rotate.y;

}

function animate() {
    shapes.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();



// start animation