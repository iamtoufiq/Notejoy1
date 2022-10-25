let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  // notesObj.push(addTxt.value);
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);

  showNotes();
});

// this is the second function that we are using for the display the notes

const showNotes = () => {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = ""; // look here why first itme not renderinf empty
  notesObj.forEach((elem, idex) => {
    html += `<div class="noteCard card mx-1 my-1" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">notes: ${idex + 1}</h5>
        <p class="card-text">${elem}</p>
        <a href="#" id="${idex}" onclick = "deletNode(this.id)" class="btn btn-primary">
          delete Note
        </a>
      </div>
    </div>`;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<h3> <i> Nothing to show! "Add a note" section above to add notes</i> </h3>`;
  }
};

showNotes();

const deletNode = (idd) => {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(idd, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
};

let search = document.getElementById("searchHere");
search.addEventListener("input", () => {
  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  console.log(noteCards);
  Array.from(noteCards).forEach((elem) => {
    let cardTxt = elem.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  });
});
