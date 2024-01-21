const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove",function(){
        DocumentTimeline.querySelector("#minicircle").style.transform = translate(${dets.clientX}px, ${dets.ClientY}px);
    })
}

circleMouseFollower();