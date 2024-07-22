const myLibrary = [];

function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

Book.prototype.addBookToLibrary=function(){
    myLibrary[myLibrary.length]=this;
}

const book1=new Book('Autobio','JohnCena',34,true);

const book2=new Book('Autbio','Johena',84,false);

book1.addBookToLibrary();
book2.addBookToLibrary();
console.log(myLibrary);

let gridSkeleton=document.querySelector(".bookGrid");
let bookSkeleton=document.querySelector(".books");
let newDiv;
let titleDiv;
let authorDiv;
let pageDiv;
let modDiv;
let deletionDiv;
let readingDiv;
let pendingDiv;
let latestBook;
function generateBooks(){
    resetBooks();
    for(let i=0;i<myLibrary.length;i++){

        let childCounter=0;

        newDiv=document.createElement("div");
        gridSkeleton.appendChild(newDiv).classList.add("books");
        gridSkeleton.children[i].setAttribute('id',`book${i}`);
        latestBook=document.querySelector(`#book${i}`);
        titleDiv=document.createElement("div");
        latestBook.appendChild(titleDiv).classList.add("bookTitle");
        latestBook.childNodes[childCounter].innerText=myLibrary[i].name;
        childCounter++;

        authorDiv=document.createElement("div");
        latestBook.appendChild(authorDiv).classList.add("author");
        latestBook.childNodes[childCounter].innerText=myLibrary[i].author;
        childCounter++;

        pageDiv=document.createElement("div");
        latestBook.appendChild(pageDiv).classList.add("totalPages");
        latestBook.childNodes[childCounter].innerText=`No. of pages: ${myLibrary[i].pages}`;
        childCounter++;

        modDiv=document.createElement("div");
        latestBook.appendChild(modDiv).classList.add("bookMod");
               
        readingDiv=document.createElement("button");
        pendingDiv=document.createElement("button");
        
        
        if(myLibrary[i].read===true){
        latestBook.childNodes[childCounter].appendChild(readingDiv).classList.add("reading");    
        latestBook.childNodes[childCounter].childNodes[0].innerText="Completed";}
        else{
        latestBook.childNodes[childCounter].appendChild(pendingDiv).classList.add("pending");
        latestBook.childNodes[childCounter].childNodes[0].innerText="Pending";}

        latestBook.childNodes[childCounter].childNodes[0].setAttribute('id',`readstatus${i}`)
        

        deletionDiv=document.createElement("button");
        latestBook.childNodes[childCounter].appendChild(deletionDiv).classList.add("deletion");
        latestBook.childNodes[childCounter].childNodes[1].innerText="Delete";
        latestBook.childNodes[childCounter].childNodes[1].setAttribute('id',`delete${i}`)
        
        

        

        
    }
}

generateBooks();


function resetBooks(){
    let count=gridSkeleton.childElementCount;
    for(let j=0;j<count;j++){
        let child=document.getElementById(`book${j}`);
        gridSkeleton.removeChild(child);
    }
}



let btn= document.querySelectorAll(".deletion");

deletionFunc();

function deletionFunc(){
    for(let deletor of btn){
        deletor.addEventListener('click',()=>{
            let childDeletion=document.getElementById(`book${deletor.id.slice(6)}`);          
            gridSkeleton.removeChild(childDeletion);
            myLibrary.splice(`${deletor.id.slice(6)}`,1);
            console.log(myLibrary);
            console.log(btnRead);
            deletionReset(`${deletor.id.slice(6)}`);
            generateBooks();
            setBtn();
            
        });
    }
}

function deletionReset(position){
    let count=gridSkeleton.childElementCount;
    for(let j=0;j<count+1;j++){
        if(j==position){
            
            continue;
        };
        let child=document.getElementById(`book${j}`);
        gridSkeleton.removeChild(child);
    }
   

}

function setBtn(){
    console.log(btn);
    btn= document.querySelectorAll(".deletion");
    btnRead= document.querySelectorAll(".reading");
    btnReadAlt= document.querySelectorAll(".pending");
    console.log(btn);
    deletionFunc();
    pendingFunc();
    readFunc();

}





let btnRead= document.querySelectorAll(".reading");

readFunc();

function readFunc(){
        for(let toggler of btnRead){
        toggler.addEventListener('click',()=>{
            let readToggler=document.getElementById(`readstatus${toggler.id.slice(10)}`);
            
            
            if(myLibrary[toggler.id.slice(10)].read===true){
                readToggler.classList.remove('reading');
                readToggler.classList.add('pending');
                readToggler.innerText='Pending';
                myLibrary[toggler.id.slice(10)].read=false;
                
            }
            else if(myLibrary[toggler.id.slice(10)].read===false){
                readToggler.classList.remove('pending');
                readToggler.classList.add('reading');
                readToggler.innerText='Completed';
                myLibrary[toggler.id.slice(10)].read=true;
                
                

            }
            
            
        });
        }
    };





let btnReadAlt= document.querySelectorAll(".pending");

pendingFunc();

function pendingFunc(){
    for(let togglerAlt of btnReadAlt){

        togglerAlt.addEventListener('click',()=>{
            let readTogglerAlt=document.getElementById(`readstatus${togglerAlt.id.slice(10)}`);
            console.log(togglerAlt);      
            
            if(myLibrary[togglerAlt.id.slice(10)].read===false){
                readTogglerAlt.classList.remove('pending');
                readTogglerAlt.classList.add('reading');
                readTogglerAlt.innerText='Completed';
                myLibrary[togglerAlt.id.slice(10)].read=true;
            
            }
            else if(myLibrary[togglerAlt.id.slice(10)].read===true){
                readTogglerAlt.classList.remove('reading');
                readTogglerAlt.classList.add('pending');
                readTogglerAlt.innerText='Pending';
                myLibrary[togglerAlt.id.slice(10)].read=false;

            }
         
        });
        
    }
}




let dialogs=document.querySelector("dialog");
let buttonadd=document.querySelector(".addButton");
buttonadd.addEventListener('click',()=>{dialogs.showModal();});

let buttoncancel=document.querySelector("#cancellation");
buttoncancel.addEventListener('click',()=>{dialogs.close();});

let formSubmit=document.querySelector("form");
let buttonSubmit=document.querySelector("#submission");
formSubmit.addEventListener('submit',function(e){
    // e.preventDefault();
    // formSubmit.requestSubmit();
    



    console.log(this);
    console.log(formSubmit);
    console.log(formSubmit);
    dialogs.close();

})