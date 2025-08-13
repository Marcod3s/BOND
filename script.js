const common2 = document.querySelector('#common2');
const common3 = document.querySelector('#common3');
const inclusion2 =  document.querySelector('#inclusion2');
const inclusion3 =  document.querySelector('#inclusion3');
const resources2 = document.querySelector('#resources2')
const resources3 = document.querySelector('#resources3')

function showCommon2Items() {
    document.querySelector('#common2 ul').classList.remove('hidden')
}
function hideCommon2Items() {
    document.querySelector('#common2 ul').classList.add('hidden')
}

function showCommon3Items() {
    document.querySelector('#common3 ul').classList.remove('hidden')
}
function hideCommon3Items() {
    document.querySelector('#common3 ul').classList.add('hidden')
}

function showInclusion2Items() {
    document.querySelector('#inclusion2 ul').classList.remove('hidden')
}

function hideInclusion2Items(){
    document.querySelector('#inclusion2 ul').classList.add('hidden')
}

function showInclusion3Items() {
    document.querySelector('#inclusion3 ul').classList.remove('hidden')
}

function hideInclusion3Items(){
    document.querySelector('#inclusion3 ul').classList.add('hidden')
}

function showResources2Items(){
    document.querySelector('#resources2 ul').classList.remove('hidden')
}

function hideResources2Items(){
    document.querySelector('#resources2 ul').classList.add('hidden')
}

function showResources3Items(){
    document.querySelector('#resources3 ul').classList.remove('hidden')
}
function hideResources3Items(){
    document.querySelector('#resources3 ul').classList.add('hidden')
}

common2.addEventListener('mouseover', showCommon2Items)
common2.addEventListener('mouseout', hideCommon2Items)

common3.addEventListener('mouseover', showCommon3Items)
common3.addEventListener('mouseout', hideCommon3Items)

inclusion2.addEventListener('mouseover', showInclusion2Items)
inclusion2.addEventListener('mouseout', hideInclusion2Items)

inclusion3.addEventListener('mouseover', showInclusion3Items)
inclusion3.addEventListener('mouseout', hideInclusion3Items)

resources2.addEventListener('mouseover', showResources2Items)
resources2.addEventListener('mouseout', hideResources2Items)

resources3.addEventListener('mouseover',showResources3Items)
resources3.addEventListener('mouseout', hideResources3Items)