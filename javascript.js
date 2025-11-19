const myLibrary = [];

function Book(title, author, subject) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.subject = subject;
    this.status = "To Read"; 

/*     this.sayTitle = function() {
        console.log(this.title)
    };
    this.sayAuthor = function() {
        console.log(this.author)
    }; */

    console.log(`New book created with id '${this.id}'`);
}


// This function will add all the books in the array and will sort them by id
function renderLibrary() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Clear existing rows

    // Sort by ID if you want
    const sortedBooks = [...myLibrary].sort((a, b) => a.id.localeCompare(b.id));

    sortedBooks.forEach((book) => {
        const row = document.createElement("tr");

        // this replaces document.createElement as it's easier to add a button
        row.innerHTML = 
          `<td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.subject}</td>
          <td><button class="status-btn" data-id="${book.id}">${book.status}</button></td>
          <td><button class="delete-btn" data-id="${book.id}">Delete</button></td>`
        ;

        // const titleCell = document.createElement("td");
        // const authorCell = document.createElement("td");
        // const subjectCell = document.createElement("td");
        // const deleteCell = document.createElement("td");

        // titleCell.textContent = book.title;
        // authorCell.textContent = book.author;
        // subjectCell.textContent = book.subject;
        // deleteCell

        // row.appendChild(titleCell);
        // row.appendChild(authorCell);
        // row.appendChild(subjectCell);

        tableBody.appendChild(row);

        // attach event listener to delete-btn
        document.querySelectorAll(".delete-btn").forEach(btn => {
          btn.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            deleteBook(id); 
          })
        })
    });
}


function deleteBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    renderLibrary();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const newBookBtn = document.getElementById("new-book");
  const form = document.getElementById("book-form");

  // these rows are used only to debug --> REMOVE
  console.log("Script loaded OK");
  console.log("Button:", newBookBtn);
  console.log("Form:", form);

  // If the button or form doesn't exist, stop here
  if (!newBookBtn || !form) {
    console.error("ERROR: Could not find #new-book or #book-form in DOM");
    return;
  }

  newBookBtn.addEventListener("click", () => {
    console.log("New book button clicked");
    form.classList.toggle("hidden");
  });

  // the new book is pushed into the array myLibrary
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // this prevent refreshing the page by default

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const subject = document.getElementById("subject").value.trim();

    if (title && author && subject) {
      const newBook = new Book(title, author, subject);
      myLibrary.push(newBook);

      console.log("Book added:", newBook);
      console.log("Library:", myLibrary);

      renderLibrary();

      form.reset();
      form.classList.add("hidden");
    } else {
      alert("Please fill in all fields.");
    }
  });
});

