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
        latestBook.childNodes[childCounter].appendChild(readingDiv).classList.add("reading");
        if(myLibrary[i].read===true){
        latestBook.childNodes[childCounter].childNodes[0].innerText="Completed";}
        else{latestBook.childNodes[childCounter].childNodes[0].innerText="Pending";}
        latestBook.childNodes[childCounter].childNodes[0].setAttribute('id',`readstatus${i}`)
        

        deletionDiv=document.createElement("button");
        latestBook.childNodes[childCounter].appendChild(deletionDiv).classList.add("deletion");
        latestBook.childNodes[childCounter].childNodes[1].innerText="Delete";
        latestBook.childNodes[childCounter].childNodes[1].setAttribute('id',`delete${i}`)
        
        console.dir(latestBook);

        
    }
}

generateBooks();
generateBooks();

function resetBooks(){
    let count=gridSkeleton.childElementCount;
    for(let j=0;j<count;j++){
        let child=document.getElementById(`book${j}`);
        gridSkeleton.removeChild(child);
    }
}

let btn= document.querySelectorAll(".deletion");
for(let deletor of btn){
    deletor.addEventListener('click',()=>{
        let childDeletion=document.getElementById(`book${deletor.id.slice(6)}`);
        gridSkeleton.removeChild(childDeletion);
        
    });
}

let btnRead= document.querySelectorAll(".reading");
for(let toggler of btnRead){
    toggler.addEventListener('click',()=>{
        let readToggler=document.getElementById(`readstatus${toggler.id.slice(10)}`);
        readToggler.classList.toggle('reading');
        
        
    });
}