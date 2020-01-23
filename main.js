


//Initialising  the elements
const generBtn = document.querySelector('#gener-btn');
const tbl = document.querySelector('table');
const tblbody = document.createElement('tbody');
const rowInput = document.querySelector('#row_input');
const colInput = document.querySelector('#column_input');
let borWidth = document.querySelector('#border_width');
let tblBorCol = document.querySelector('#border_color');
let theadBgc = document.querySelector('#head_bgc');    
let tbodyBgc = document.querySelector('#body_bgc');
let codeBtn = document.querySelector('#code-btn');
let form = document.querySelector('.gener');



//Get code function
codeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let getCode = tbl.innerHTML;
    const textA = document.createElement('p');
    textA.textContent = getCode;
    textA.setAttribute('class', 'getcode');
    
    document.body.appendChild(textA);
    document.body.removeChild(textA);
    

})









let tableGener = (x, n) => {
    const thead = document.createElement('thead');
    for (let j= 0; j < n; j++) {
            
        let v = 1;
        const hcell = document.createElement('td');
        hcell.textContent = `Head ${j + 1}`;
            
        hcell.style.border = `${borWidth.value}px`;
        hcell.style.borderStyle = 'solid';
        hcell.style.borderColor = tblBorCol.value;
        hcell.style.padding = '5px';
        thead.appendChild(hcell);
        tbl.appendChild(thead);
    }
    
    
    for (let i = 0; i < x; i++) {
            

        const trow = document.createElement('tr');
        if ( i  %  2  ==  0) {
        trow.style.background = tbodyBgc.value;

        } else {

        trow.style.background = theadBgc.value;
        }

        tblbody.appendChild(trow);                      
            
    
        for (let j = 0; j < n; j++) {
               
    
            const tcell = document.createElement('td');    

            tcell.textContent = 'value';
            tcell.style.padding = '5px';
            
            //tcell.style
            tcell.style.border = `${borWidth.value}px`;
            tcell.style.borderStyle = 'solid';
            tcell.style.borderColor = tblBorCol.value;

            trow.appendChild(tcell);                               
        }
    
    }
    
    tbl.appendChild(tblbody);
    
    
    //Styling the table
    let tblWidth = document.querySelector('#table_width');
    let borCollapse = document.querySelector('#border_collapse');
    let tblFontCol = document.querySelector('#font_color');
    let fontType = document.querySelector('#font_select').value;
    let fontWeight = document.querySelector('#font_weight').value;
    let textLign = document.querySelector('#text_align').value;
    let fontSize = document.querySelector('#font_size').value;
    

    tbl.style.border = `${borWidth.value}px`;
    tbl.style.borderStyle = 'solid';
    tbl.style.backgroundColor = `white`;
    tbl.style.borderColor = tblBorCol.value;
    tbl.style.marginLeft = 'auto';
    tbl.style.marginRight = 'auto';
    tbl.style.width = `${tblWidth.value}%`;
    tbl.style.fontFamily = fontType;
    tbl.style.fontWeight = fontWeight;
    tbl.style.color = tblFontCol.value;
    tbl.style.fontSize = `${fontSize}px`;
    //tblbody.style.backgroundColor = tbodyBgc.value;
    tblbody.style.textAlign = textLign;
    thead.style.backgroundColor = theadBgc.value;
    thead.style.textAlign = 'center';

    let bordCollapse = borCollapse.checked;

    if (bordCollapse === true) {
        tbl.style.borderCollapse = 'collapse';
        } else {
        tbl.style.borderCollapse = 'separate';
    }

         

}

//Table generator function
generBtn.addEventListener('click', e => {     
    e.preventDefault();

    tbl.innerHTML = '';
    tblbody.innerHTML = '';
        

    let n = colInput.value; //column input
    let x = rowInput.value; //row input
        
    tableGener(x, n);   
    
});





