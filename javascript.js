const myLibrary = [];

function Book(title, author, subject) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.subject = subject;

/*     this.sayTitle = function() {
        console.log(this.title)
    };
    this.sayAuthor = function() {
        console.log(this.author)
    }; */

    console.log(`New book created with id '${this.id}'`);
}

// --- DOM loaded ---
document.addEventListener("DOMContentLoaded", () => {
  const newBookBtn = document.getElementById("new-book");
  const form = document.getElementById("book-form");

  // Safety check: confirm elements are found
  console.log("Script loaded ✅");
  console.log("Button:", newBookBtn);
  console.log("Form:", form);

  // If the button or form doesn't exist, stop here
  if (!newBookBtn || !form) {
    console.error("❌ Could not find #new-book or #book-form in DOM");
    return;
  }

  // Toggle form visibility
  newBookBtn.addEventListener("click", () => {
    console.log("New book button clicked");
    form.classList.toggle("hidden");
  });

  // Handle form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const subject = document.getElementById("subject").value.trim();

    if (title && author && subject) {
      const newBook = new Book(title, author, subject);
      myLibrary.push(newBook);

      console.log("📚 Book added:", newBook);
      console.log("📘 Library:", myLibrary);

      form.reset();
      form.classList.add("hidden");
    } else {
      alert("Please fill in all fields.");
    }
  });
});

