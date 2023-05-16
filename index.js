window.onload = () => {
    const watch = document.querySelector('.watch')
    const items = document.querySelectorAll('.item')

    const lineOne = document.querySelector('.line-one')
    const lineTwo = document.querySelector('.line-two')

    const name = document.querySelector('.name')
    const brand = document.querySelector('.brand')

    addAnimation(watch, 'animated', 1)

    timeout(300, setInterval(() => {
        items.forEach(item => {
            addAnimation(item, 'animated', 1)
        })
    }, 500))

    if (window.innerWidth > 1040) {
        timeout(1000, increaseByHeight(lineOne, 'animated', 2))
        timeout(2000, increaseByHeight(lineTwo, 'animated', 3))
    }

    if (window.innerWidth < 1040) {
        timeout(1000, addAnimation(lineOne, 'full', 2))
        timeout(2000, addAnimation(lineTwo, 'full', 3))
    }

    if (window.innerWidth < 700) {
        timeout(1000, addAnimation(brand, 'full', 2))
    }

    timeout(3000, addAnimation(name, 'animated', 1))
    timeout(3000, addAnimation(brand, 'animated', 1.5))

    console.log(watch, items)
}

function timeout(timer, fn) {
    if (timer) {
        setTimeout(() => {
            return fn
        }, timer);
    }
}


function addAnimation(e, t, s) {
    const result = checkRegex(e, t)
    e.style.transition = `${s}s`
    e.classList.add(t) ? e && result === true : false
}

function checkRegex(e, t) {
    const regex = new RegExp(t)
    const item = e.className

    const checkRegex = regex.test(item)

    return true ? checkRegex || checkRegex !== undefined : false
}

function increaseByHeight(e, put, s) {
    const result = checkRegex(e, put)

    if (result === true || result) {
        for (let j = 0; j < 101; j++) {
            e.style.height = `${j}vh`
        }
        e.style.transition = `${s}s`
        addAnimation(e, put, s)
    }
}
