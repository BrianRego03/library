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