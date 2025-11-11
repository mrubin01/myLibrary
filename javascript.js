const myLibrary = [];

function Book(title, author, subject) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.subject = subject;

    this.sayTitle = function() {
        console.log(this.title)
    };
    this.sayAuthor = function() {
        console.log(this.author)
    };
}



