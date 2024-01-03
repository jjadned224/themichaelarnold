window.onload = () => {
    count = 0;
    const navbutton = document.getElementById("show");
    navbutton.onclick = shownav;

  showBooks();

    document.getElementById("currentQ").innerHTML = quotes[0];
    document.getElementById("names").innerHTML = names[0];
    document.getElementById("titles").innerHTML = title[0];
    rotator(true);

    const but1 = document.getElementById("button1");
    const but2 = document.getElementById("button2");
    const submit = document.getElementById("submitconnect");
    submit.onclick = showEmailResult;
    but1.onclick = react;
    but2.onclick = react;
    
    setInterval(() => {
        rotator(false);
}, 10000);

}

react = () => {
    rotator(false)
}

currentbutton = (current = Boolean) => {
    console.log(current);
    if (current == true) {
        document.getElementById("button1").classList.remove("pressed");
        document.getElementById("button1").classList.add("buttonunpress");
        document.getElementById("button2").classList.add("pressed");
        document.getElementById("button2").classList.remove("buttonunpress");
    } else {
        document.getElementById("button1").classList.add("pressed");
        document.getElementById("button1").classList.remove("buttonunpress");
        document.getElementById("button2").classList.remove("pressed");
        document.getElementById("button2").classList.add("buttonunpress");
    }
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

const quotes = ['“This is the best presentation that I have heard in this club and one of the best workshops I have participated in the District. I actually participated and I am a notorious non-participant, your energy engaged us.”','“Michael mentored me through Six Sigma training and was instrumental in helping develop my skills in problem solving. Michael was able to help myself and another colleague examine the data using various problem-solving methods to look for all possible solutions, reducing potential injuries within the facility.”'];

const names = ['Allison B.', 'Angela S.'];

const title = ['Toastmaster of 25 years','EHS Coordinator'];

rotator = (test = Boolean) => {
    if (test == true) {
        i = 0;
} else {
    if(i > 1){
        i = 0;
        currentbutton(false);
    } else {
        currentbutton(true);
    }
}
    const out = document.querySelector("#currentQ");
    const outname = document.querySelector("#names");
    const outtitle = document.querySelector("#titles");
    
    out.innerHTML = quotes[i];
    outname.innerHTML = names[i];
    outtitle.innerHTML = title[i];
    i++

}

const showEmailResult = async (e) => {
  e.preventDefault();
  const result = document.getElementById("result");
  let response = await getEmailResult();
  if (response.status == 200) {
    result.innerHTML = "Email Successfully Sent";
  } else {
    result.innerHTML = "Sorry, your email was not sent.";
  }
};

const getEmailResult = async (e) => {
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  const result = document.getElementById("result");
  result.innerHTML = "Please wait...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    return response;
  } catch (error) {
    console.log(error);
    document.getElementById("result").innerHTML =
      "Sorry your email couldn't be sent";
  }
};



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
  const url = "https://jjadned224.github.io/themichaelarnold/new_home/books.json";

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
  title.style.marginBottom="10%";
  let br = document.createElement("br");
  title.append(br);

  let section = document.createElement("section");
  section.classList.add("rower");

  
  let row = document.createElement("div");
  row.style.width="fit-content";

  

  let ul = document.createElement("ul");
  ul.style.paddingRight="50px";
  section.append(ul);
  ul.append(getLi(`${book.description}`));
  ul.append(getLi(`${book.author}`, 1));
  let img = document.createElement("img");
  
  img.src = book.img;
  section.append(img);
  row.appendChild(title);
  row.appendChild(section);
  return row;
};

const getLi = (data, x) => {
  const li = document.createElement("li");
  li.textContent = data;
  if (x==1){
    li.style.color="#CD3532";
    li.style.textAlign="right";
  }
  return li;
};