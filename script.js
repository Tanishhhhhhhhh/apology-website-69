function showMessage1() {
    const message = document.getElementById('message1');
    if (message.style.display === 'none' || message.style.display === '') {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.opacity = '1';
        }, 100);
    } else {
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.display = 'none';
        }, 500);
    }
}

function showMessage2() {
    const message = document.getElementById('message2');
    if (message.style.display === 'none' || message.style.display === '') {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.opacity = '1';
        }, 100);
    } else {
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.display = 'none';
        }, 500);
    }
}

function showMessage3() {
    const message = document.getElementById('message3');
    if (message.style.display === 'none' || message.style.display === '') {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.opacity = '1';
        }, 100);
    } else {
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.display = 'none';
        }, 500);
    }
}
