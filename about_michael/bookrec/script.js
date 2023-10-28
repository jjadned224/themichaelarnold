window.onload = () => {
    showBooks();
    count = 0;
    const navbutton = document.getElementById("show");
    navbutton.onclick = shownav;
  }

shownav = () => {
    x = document.getElementById("navbar");
    if (count == 0) {
        x.classList.remove("display");
        count = 1;
    } else {
        x.classList.add("display");
        count = 0;
    }
}

const getBooks = async () => {
    const url = "https://jjadned224.github.io/themichaelarnold/about_michael/bookrec/books.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showBooks = async () => {
    let books = await getBooks();
    let BookList = document.getElementById("book-lists");
  
    books.forEach((book) => {
      BookList.append(getBookItem(book));
    });
  };

  const getBookItem = (book) => {
    let title = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = book.name;
    title.append(h1);

    let section = document.createElement("section");
    section.classList.add("rower");
    
    let row = document.createElement("div");

    let img = document.createElement("img");
    img.src = book.img;
    section.append(img);

    let ul = document.createElement("ul");
    
    section.append(ul);
    ul.append(getLi(`Author: ${book.Author}`));
    ul.append(getLi(`Published: ${book.Published}`));
    ul.append(getLi(`Genres: ${book.genres}`));
    ul.append(getLi(`Page Count: ${book.page}`));
    ul.append(getLi(`Description: ${book.description}`));
    
    row.appendChild(title);
    row.appendChild(section);
    return row;
  };
  
  const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
  };
