let cubeFrontFace = new Zdog.Box({
    addTo: shapes,
    width: 129.5,
    height: 199.5,
    depth: 10,
    stroke: 0,
    translate: {
        x: 0,
        y: 0,
        z: 74
    },
})
let cubebackface = new Zdog.Box({
    addTo: shapes,
    width: 129.5,
    height: 199.5,
    depth: 10,
    stroke: 0,
    translate: {
        x: 0,
        y: 0,
        z: -70
    },
})
let cubeTopFace = new Zdog.Box({
    addTo: shapes,
    width: 129.5,
    height: 150,
    depth: 10,
    stroke: 0,
    rotate: { x: 1.57 },
    translate: {
        x: 0,
        y: -95,
        z: 0
    },
})
let cubeBottomFace = new Zdog.Box({
    addTo: shapes,
    width: 129.5,
    height: 150,
    depth: 10,
    stroke: 0,
    rotate: { x: 1.57 },
    translate: {
        x: 0,
        y: 95,
        z: 0
    },
})
let cubeLeftFace = new Zdog.Box({
    addTo: shapes,
    width: 140,
    height: 183,
    depth: 10,
    stroke: 0,
    color: 'bisque',
    rotate: { x: 0, y: 1.57 },
    translate: {
        x: 60,
        y: 0,
        z: 0
    },
})
let cuberightFace = new Zdog.Box({
    addTo: shapes,
    width: 140,
    height: 190,
    depth: 10,
    stroke: 0,
    rotate: { x: 0, y: 1.57 },
    translate: {
        x: -60,
        y: 0,
        z: 0
    },
})



let cilinder = new Zdog.Cylinder({
    addTo: shapes,
    diameter: 100,
    length: 3,
    stroke: 0,
    color: 'black',
    translate: {
        x: 0,
        y: 15,
        z: 85
    },
})
let cilinder2 = new Zdog.Cylinder({
    addTo: shapes,
    diameter: 85,
    length: 3,
    stroke: 0,
    color: 'gray',
    translate: {
        x: 0,
        y: 15,
        z: 85
    },
})

