const myLibrary = [];

function Book(title, author, subject) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.subject = subject;

    this.sayTitle = function() {
        console.log(this.title)
    };
    this.sayAuthor = function() {
        console.log(this.author)
    };

    console.log(`New book created with id '${this.id}'`);
}

const newBookBtn = document.getElementById('new-book');
const form = document.getElementById('book-form');

newBookBtn.addEventListener('click', () => {
  form.classList.toggle('hidden');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const subject = document.getElementById('subject').value.trim();

    if (title && author && subject) {
        const newBook = new Book(title, author, subject);
        myLibrary.push(newBook);

        console.log("Book added:", newBook);
        console.log("Library:", myLibrary);

        // Reset form and hide it
        form.reset();
        form.classList.add('hidden');
    } else {
        alert('Please fill in all fields.');
    }
}); 
