particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60
        },
        "color": {
            "value": "#1B5E20"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#f2f3f6"
            }
        },
        "polygon": {
            "nb_sides": 3
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#1B5E20",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    }
})

const typewriter = new Typewriter('#typewriter', {
    loop: true
});

typewriter.typeString('Website will be available soon...')
    .pauseFor(1000)
    .deleteChars(25)
    .typeString('under maintanance.')
    .pauseFor(1000)
    .deleteAll()
    .start();