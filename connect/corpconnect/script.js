window.onload = () => {
    count = 0;
    const navbutton = document.getElementById("show");
    navbutton.onclick = shownav;
    const submit = document.getElementById("submitconnect");
    submit.onclick = showEmailResult;
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

const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if (response.status == 200) {
      result.innerHTML = "Information Successfully Sent";
    } else {
      result.innerHTML = "Sorry, your information was not sent.";
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
        "Sorry your information couldn't be sent";
    }
  };