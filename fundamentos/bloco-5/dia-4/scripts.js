window.onload = function(){
    let select = document.querySelector('select');
    select.addEventListener('change', function(){
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;

        localStorage.setItem('5-4-background-color', selected.value);
    })

    select.addEventListener('mouseover', function(){
        select.style.backgroundColor = "light blue";
    })

    let inputFontSize = document.querySelector('input[name="font-size"]')
    inputFontSize.addEventListener('change', function(){
        let p = document.querySelector('p');
        p.style.fontSize = `${inputFontSize.value}px`;

        localStorage.setItem('5-4-font-size', `${inputFontSize.value}px`);
    })

    let fontColor = document.getElementById('font-color');
    fontColor.addEventListener('change', function(){
        let fontSelected = fontColor.selectedOptions[0];
        document.body.style.color = fontSelected.value;

        localStorage.setItem('5-4-font-color', fontSelected.value);
    })

    let inputLineHeight = document.querySelector('input[name="line-height"]')
    inputLineHeight.addEventListener('change', function(){
        let p = document.querySelector('p');
        p.style.lineHeight = `${inputLineHeight.value}px`;

        localStorage.setItem('5-4-line-height', `${inputLineHeight.value}px`);
    })

    let fontFamily = document.getElementById('font-family');
    fontFamily.addEventListener('change', function(){
        let familySelected = fontFamily.selectedOptions[0];
        document.body.style.fontFamily = familySelected.value;

        localStorage.setItem('5-4-font-family', familySelected.value);

    })

    let buttonBig = document.getElementById('button');
    buttonBig.addEventListener('click', function(){
        buttonBig.style.backgroundColor = "red";
    })

    let savedBackground = localStorage.getItem('5-4-background-color');
    document.body.style.backgroundColor = savedBackground;

    let savedFontSize = localStorage.getItem('5-4-font-size');
    let p = document.querySelector('p');
    p.style.fontSize = savedFontSize;
    
    let savedLineHeight = localStorage.getItem('5-4-line-height');
    p.style.lineHeight = savedLineHeight;

    let savedFontColor = localStorage.getItem('5-4-font-color');
    p.style.color = savedFontColor;

    let savedFamily = localStorage.getItem('5-4-font-family');
    p.style.fontFamily = savedFamily;

}
