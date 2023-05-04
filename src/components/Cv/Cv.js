import { dataTemplate } from './dataTemplate.js'
import './Cv.css';

const openCv = () => {
    
    const rootEl = document.querySelector('#root');
    const cvElement = document.createElement("div");
    const cvElementContent = document.createElement("div");
    const closeEl = document.createElement("button");
    const fadeContent = document.createElement("div");
    cvElement.classList.add('modal');
    cvElementContent.classList.add('content');
    fadeContent.classList.add('shadow');
    closeEl.setAttribute('id', 'close-modal');
    closeEl.classList.add('close', 'btn');
    rootEl.appendChild(fadeContent);
    rootEl.appendChild(cvElement);
    document.body.style.overflow = 'hidden';
    
    const printBtn = document.createElement('a');
    printBtn.setAttribute('id', 'printBtn');
    printBtn.setAttribute('target', '_blank');
    printBtn.setAttribute('href', 'https://typodgrafiki.pl/cv.pdf');
    printBtn.setAttribute('rel', 'nofollow noreferer noopener')
    printBtn.style.opacity = 1;
    printBtn.classList.add('btn', 'btn-default');
    printBtn.textContent = 'Drukuj';
    
    setTimeout(function () {
        cvElement.classList.add('loading');
        setTimeout(function () {
            cvElement.classList.add('show');
            cvElement.classList.remove('loading');
            setTimeout(function () {
                cvElementContent.innerHTML = dataTemplate;
                cvElement.append(cvElementContent, closeEl)
                cvElementContent.append(printBtn);
            }, 1200);
        }, 750);
    }, 750);
    
    closeEl.addEventListener('click', (e) => {
        closeCv(cvElement, fadeContent);    
    });
    
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closeCv(cvElement, fadeContent);
        }
    });
}

const closeCv = (modal, shadow) => {
    modal.classList.add('detach');
    document.body.style = false;
    setTimeout(function () {
        shadow.style.opacity = 0;
        setTimeout(function () {
            modal.remove();
            shadow.remove();
        }, 200);
    }, 200);
}

window.addEventListener("load", (event) => {
    const urlHash = window.location.hash.replace('#', '').toLocaleLowerCase();
    if(urlHash === 'cv') {
        openCv();   
    }
});

export { openCv }