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
    for(let i=0;i<myLibrary.length;i++){
        newDiv=document.createElement("div");
        gridSkeleton.appendChild(newDiv).classList.add("books");
        gridSkeleton.children[i].setAttribute('id',`book${i}`);
        latestBook=document.querySelector(`#book${i}`);
        titleDiv=document.createElement("div");
        latestBook.appendChild(titleDiv).classList.add("bookTitle");

        authorDiv=document.createElement("div");
        latestBook.appendChild(authorDiv).classList.add("author");

        pageDiv=document.createElement("div");
        latestBook.appendChild(pageDiv).classList.add("totalPages");

        modDiv=document.createElement("div");
        latestBook.appendChild(modDiv).classList.add("bookMod");

        deletionDiv=document.createElement("div");
        latestBook.appendChild(deletionDiv).classList.add("deletion");

        readingDiv=document.createElement("div");
        latestBook.appendChild(readingDiv).classList.add("reading");

        
    }
}

generateBooks();