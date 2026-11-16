//Book Tracker App

const books = [];
let running = true;

function addBook() {
    const title = prompt("Enter book title:");
    const author = prompt("Enter book author:");
    const genre = prompt("Enter book genre:");

if (!title || !author || !genre) {
    console.log("Invalid input. Book not added.");
    return;
}

const book = {
    title: title,
    author: author,
    genre: genre,
};

books.push(book);
console.log("Book added!");
}

function listBooks() {
    if (books.length === 0) {
        console.log("No books yet.");
        return;
    }

    books.forEach(book => {
        console.log(`${book.title} by ${book.author} (${book.genre})`);
    });
}

function markAsRead(title) {
    const book = books.find(b => b.title.toLowerCase() === title.toLowerCase());
    if (book) {
        book.isRead = true;
        console.log(`${book.title} marked as read.`);
    } else {
        console.log("Book not found.");
    }
}

while (running) {
    const choice = prompt("Book Tracker:\n1. Add Books\n2. List Books\n3. Mark as Read\n4. Exit\nEnter your choice:");
    if (choice === null) {
        running = false;
        break;
    }

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            listBooks();
            break;
        case "3":
            const title = prompt("Enter book title to mark as read:");
            markAsRead(title);
            break;
        case "4":
            running = false;
            console.log("Goodbye!");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}