window.addEventListener('DOMContentLoaded', (event) => {

    let eventclick = document.querySelector('#click');
        eventclick.addEventListener('click', function (){
            eventclick.style.background = '#FF3333';
        });

    let eventdbclick = document.querySelector('#dbclick');
        eventdbclick.addEventListener('dblclick', function (){
            eventdbclick.style.background = '#FF7733';
        });

    let evententer = document.querySelector('#mouseenter');
    evententer.addEventListener('mouseenter', function (){
        evententer.style.background = '#33FF33';
    });

    let eventleave = document.querySelector('#mouseleave');
    eventleave.addEventListener('mouseleave', function (){
        eventleave.style.background = '#228877';
    });

    let eventupdown = document.querySelector('#mouseupdown');
    eventupdown.addEventListener('mousedown', function (){
        eventupdown.style.background = '#777777';
        eventupdown.addEventListener('mouseup', function(){
            eventupdown.style.background = '#333333';
        })
    });

    let eventmove = document.querySelector('#mousemove');
    eventmove.addEventListener('mousemove', function (){
        eventmove.style.background = '#993377';
        eventmove.addEventListener('mouseleave',function (){
            eventmove.style.background = '#77AADD';
        })
    });

    let eventout = document.querySelector('#mouseout');
    eventout.addEventListener('mouseout', function (){
        eventout.style.background = '#DD00DD';
        eventout.addEventListener('eventout',function (){
            eventout.style.background = '#77AADD';
        })
    });

    let eventover = document.querySelector('#mouseover');
    eventover.addEventListener('mouseover', function (){
        eventover.style.background = '#226611';
        eventover.addEventListener('mouseout', function (){
            eventover.style.background = '#77AADD';
        })
    });

});
