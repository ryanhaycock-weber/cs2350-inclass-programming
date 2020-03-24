// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO

import "bootstrap"



const displayRandombox = function() 
{
    let r = Math.random()
    if (r > .5) 
        {
        document.write('<div class="red box"></div>')
        }

    else
        {
        document.write('<div class="blue box"></div>')
        }
}

function displayNBoxesUsingFor(n) 
{
    for (let i = 0; i < n; i++)
    {
      displayRandombox()
    }
}

function displayNBoxesUsingWhile(n)
{
    let j = 0

while (j < n)
{
    displayRandombox()
    j++
}
}

function displayNBoxesUsingDO(n)
{
    let k = 0

    do {
        displayRandombox()
        k++
    } while (k < n)
}

displayNBoxesUsingFor(10)
displayNBoxesUsingWhile(10)
displayNBoxesUsingDO(10)

const square = function(x)
{
    return x * x
}

//lert(square(10))