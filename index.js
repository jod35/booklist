const my_form=document.getElementById('book_form');
const book_container=document.getElementById('book_container');

window.onload=function(){
    const books=JSON.parse(localStorage.getItem('books'));
    
    for(var i of books){
        console.log(i);
        
    }
    
    
}
//event listener
my_form.addEventListener('submit',addBookToList);


function addBookToList(e){
    console.log("Hello");

    const book_name= document.getElementById('book_name').value;   

    const book_author=document.getElementById('book_author').value;

    const date_written=document.getElementById('date_written').value;

    const book_category=document.getElementById('book_category').value;

    const book = {
        name:book_name,
        author:book_author,
        written:date_written,
        category:book_category
    }

    
    if(localStorage.getItem('books')== null){
        const books=[]

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }

    else{
        const books=JSON.parse(localStorage.getItem('books'));

        console.log(books);

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
        
        
    }

    e.preventDefault();
}







