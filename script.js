'use strict'

const about = document.querySelector('.about')
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.close-about')
const btnShowAbout = document.querySelector('.about1')

const projects = document.querySelector('.projects')
const btnShowProjects = document.querySelector('.projects1')
const close1 = document.querySelector('.close-projects')

//For Contact 

const contact = document.querySelector('.contact')
const btnShowContact = document.querySelector('.contact1')
const overlay2 = document.querySelector('.overlay1')

const showContact = function(){
    contact.classList.remove('hidden1')
    overlay2.classList.remove('hidden1')
}
const closeContact = function(){
    contact.classList.add('hidden1')
    overlay2.classList.add('hidden1')
}

btnShowContact.addEventListener('click', showContact)
overlay2.addEventListener('click', closeContact)

const showAbout = function(){
    about.classList.remove('hidden')
    overlay.classList.remove('hidden')
}



const showProjects = function(){
    projects.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

btnShowAbout.addEventListener('click', showAbout)
btnShowProjects.addEventListener('click', showProjects)

const closeAbout = function(){
    about.classList.add('hidden')
    overlay.classList.add('hidden')
}

const closeProjects = function(){
    projects.classList.add('hidden')
    overlay.classList.add('hidden')
}


close.addEventListener('click', closeAbout)
overlay.addEventListener('click', closeAbout)

close.addEventListener('click', closeProjects)
overlay.addEventListener('click', closeProjects)



document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        if(!about.classList.contains('hidden')){
            closeAbout();
            
        }
    }
    
})

document.addEventListener('keydown', function(e){
    

    if(e.key === 'Escape'){
        if(!projects.classList.contains('hidden')){
            closeProjects();
            
        }
    }
    
})
document.addEventListener('keydown', function(e){
    

    if(e.key === 'Escape'){
        if(!contact.classList.contains('hidden1')){
            closeContact();
            
        }
    }
    
})