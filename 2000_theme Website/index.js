document.addEventListener("mousemove", function (e) {
    document.getElementById("cursor").style.left = e.clientX + "px";
    document.getElementById("cursor").style.top = e.clientY + "px";
});


document.querySelectorAll(".pic").forEach((e) => {
    e.addEventListener("mouseover", function () {
        // console.log(e.c)
        // console.log(e.className)
        document.getElementById("cursor").style.width = '150px'
        document.getElementById("cursor").style.height = '150px'
        document.getElementById("cursor").style.background = `url(${e.id}.gif) center`
        document.getElementById("cursor").style.backgroundSize = 'cover'

    })
})
document.querySelectorAll(".pic").forEach((e) => {
    e.addEventListener("mouseleave", function () {
        // console.log(e.c)
        // console.log(e.className)
        document.getElementById("cursor").style.width = '30px'
        document.getElementById("cursor").style.height = '30px'
        document.getElementById("cursor").style.background = `none`
        document.getElementById("cursor").style.backgroundSize = 'cover'
    })
})

document.querySelectorAll(".btn").forEach((e) => {
    e.addEventListener("mouseover", function () {
        // console.log(e.c)
        // console.log(e.className)
        document.getElementById("cursor").style.width = '80px'
        document.getElementById("cursor").style.height = '80px'
        document.getElementById("cursor").style.background = `url(clickBtn.gif) center`
        document.getElementById("cursor").style.backgroundSize = 'cover'
        document.getElementById("cursor").style.border = 'none'
    })
})
document.querySelectorAll(".btn").forEach((e) => {
    e.addEventListener("mouseleave", function () {
        // console.log(e.c)
        // console.log(e.className)
        document.getElementById("cursor").style.width = '30px'
        document.getElementById("cursor").style.height = '30px'
        document.getElementById("cursor").style.background = `none`
        document.getElementById("cursor").style.backgroundSize = 'cover'
        document.getElementById("cursor").style.border = '2px solid black'
    })
})

const container = document.querySelector('.container');
const dvdLogo = document.querySelector('.dvd-logo');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
let logoX = containerWidth / 2;
let logoY = containerHeight / 2;
let xSpeed = 3;
let ySpeed = 3;

function animateDVDLogo() {
    requestAnimationFrame(animateDVDLogo);

    logoX += xSpeed;
    logoY += ySpeed;

    if (logoX <= 0 || logoX + dvdLogo.clientWidth >= containerWidth) {
        xSpeed = -xSpeed; // Reverse horizontal direction on hitting the left or right edge
    }

    if (logoY <= 0 || logoY + dvdLogo.clientHeight >= containerHeight) {
        ySpeed = -ySpeed; // Reverse vertical direction on hitting the top or bottom edge
    }

    dvdLogo.style.left = `${logoX + 45}px`;
    dvdLogo.style.top = `${logoY + 25}px`;
}

animateDVDLogo();



// scrollingDown = () => {

//     window.addEventListener("scroll", function () {
//         y = window.scrollY
//         console.log('lol',y)
//         document.getElementById('phoneCont').style.position = 'sticky'
//         document.getElementById('phoneCont').style.top = '0'

//         document.getElementById("phoneCont").style.left = `-${y}px`
//     })

// }
// scrollingDown()


const phoneContWidth = document.getElementById('phoneCont').clientWidth;

const screenWidth = window.innerWidth;

document.getElementById("empty").style.display = 'none'

let tl = gsap.timeline()

tl.to('#phoneCont', {
    scrollTrigger: {
        trigger: '#phoneCont',
        start: '0% 0%',
        end: 'bottom 1%',
        scrub: true,
        // markers: true,
        onEnter: () => {
            gsap.set('#empty', { display: 'block' });
        },
        onUpdate: (self) => {
            if (self.progress >= 1) {
                gsap.set('#phoneCont', { position: 'relative', top: '0vh' });
                // gsap.set('#empty', { display:'none'});

            }
        },
        onLeaveBack: () => {
            gsap.set('#empty', { display: 'none' });
        }
        // onLeaveBack: () => {
        //     gsap.set('#empty', { backgroundColor:'pink'});
        //     // gsap.set('#empty', { display:'none'});
        // }
        // scrub:false,
        // toggleActions:'play pause reverse complete',
    },
    x: `-${phoneContWidth - screenWidth}`,
    position: 'fixed',
    top: 0

})

let tl2 = gsap.timeline()


tl2.to('#tvimg', {
    scrollTrigger: {
        trigger: '#tvimg',
        start: '0% center',
        end: '500% center',
        scrub: true,
        // markers: true,
    },
    rotate:'360deg',
    y:'130vh',
    // scale:10
    // position: 'fixed',
    // top: 0

})


