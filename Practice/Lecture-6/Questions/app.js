// Q -1. 
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
}


// Example usage:
const myBook = new Book('The Jungle Book', 'Rudyard Kipling', 1894);
console.log(myBook.getSummary());



// Q -2. 
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} by ${this.author}, published in ${this.year}.`;
//     }
// }

// class Magazine extends Book {
//     constructor(title, author, year, month) {
//         super(title, author, year);
//         this.month = month;
//     }

//     getSummary() {
//         return `${this.title} by ${this.author}, published in ${this.month} ${this.year}.`;
//     }
// }

// // Example usage:
// const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
// console.log(myBook.getSummary());  // Output: "The Great Gatsby by F. Scott Fitzgerald, published in 1925."

// const myMagazine = new Magazine('National Geographic', 'Various Authors', 2021, 'June');
// console.log(myMagazine.getSummary());  // Output: "National Geographic by Various Authors, published in June 2021."