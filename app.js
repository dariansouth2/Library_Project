console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true, 
    },

];

class Book {
    constructor(id, title, author, read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books){
        this.bookCount = books.length;
        this.books = books;
    }
    addBook(){
        //Select the inputs from the form
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");
        //Increment book
        this.nextId++;
        //Create an instance from my Book Class 
        const newBook = new Book(
            this.newId, 
            title.value, 
            author.value, 
            read.checked
            );
        //Push instance to new array
        this.books.push(newBook);
        //
        const tbody = document.getElementById("tableBody");

        const newTr = document.createElement("tr");
        newTr.classList.add(newBook.id);
        newTr.addEventListener("dblclick", (event) =>{
            this.removeBook(newBook.id);
        });

        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");

        //Add text contend to td's
        newTitle.textContent = title.value;
        newAuthor.textContent = author.value;
        const newCheckbox = document.createElement("input")
        newCheckbox.classList.add(newBook.id);
        newCheckbox.type = "checkbox";
        newCheckbox.checked = read.checked;
        newCheckbox.disabled = read.checked;
        newCheckbox.addEventListener("click", (event) =>{
            this.markRead(event.target,newBook.id);
        });
        newRead.appendChild(newCheckbox);

        newTr.appendChild(newTitle);
        newTr.appendChild(newAuthor);
        newTr.appendChild(newRead);

        tbody.appendChild(newTr);
        
        

    }


    markRead(checkbox, id){
        this.books.forEach(book =>{
            if(id == book.id){
                book.read = true;
                //checkbox.checked = true;
                checkbox.disabled = true;
            }
        });
    }

    removeBook(bookId){
        //Reassign the books array filtering out the remove book
        this.books = this.books.filter(({id}) => bookId !== id);
        //Remove the book from the DOM
        const tbody = document.getElementById("tableBody");
        tbody.removeChild(document.getElementsByClassName(bookId)[0]);
    }
}

const library = new Library(books);

const form = document.getElementById("form");
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    library.addBook();

});
