
        root.onclick = function(event) {
            if(event.clientX < 750 && event.clientY < 780 && event.clientX > 50 && event.clientY > 50) {
            ball.style.left = `${event.clientX - 40}px`;
            ball.style.top = `${event.clientY - 40}px`;
            console.log(event.clientX,event.clientY);
            }
            function interval() {
            let i = 1;
            let timer = setInterval(function() {
                console.log(i);
                if(i === 20)clearInterval(timer);
                i++;
            },200);

        }
        interval();
    }
    


    
    function clearContainer() {
        let cont = document.querySelector('#root'),
            els = cont.childNodes;
        for (let i = 0; i < els.length; i++) {
            if (els[i].nodeType === 1
                && els[i].dataset.role === 'user') {
                cont.removeChild(els[i]);
            }
        }
        return els
    }
    console.log(clearContainer());
        

        ///elem.addEventListener("click", clicker);