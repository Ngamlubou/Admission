const homePage = document.getElementById("homePage");
const studentPage = document.getElementById("studentPage");
const dashboardPage = document.getElementById("dashboardPage");
const noticesPage = document.getElementById("noticesPage");

const studentForm = document.getElementById("studentForm");

const studentName = document.getElementById("studentName");
const studentStatus = document.getElementById("studentStatus");
const studentClass = document.getElementById("studentClass");
const studentDocuments = document.getElementById("studentDocuments");

const logoutBtn = document.getElementById("logoutBtn");


function hideAllPages() {
  homePage.hidden = true;
  studentPage.hidden = true;
  dashboardPage.hidden = true;
  noticesPage.hidden = true;
}


function showPage(page) {
  hideAllPages();
  page.hidden = false;
}

// NAVIGATION
document.querySelectorAll("[data-page]")
.forEach(button => {
  button.onclick = () => {
    const page = button.dataset.page;
    if (page === "home") {
      showPage(homePage);
    }
    if (page === "student") {
      showPage(studentPage);
    }
    if (page === "notices") {
      showPage(noticesPage);
    }
  };
});

// STUDENT FETCH
studentForm.onsubmit = async (event) => {

  event.preventDefault();

  const code = studentCode.value.trim();
  const dob = studentDob.value;

  const data = {
    name: "Student Name",
    status: "Pending",
    class: "Class 9",
    documents: "Uploaded"
  };


  studentName.textContent = data.name;
  studentStatus.textContent = data.status;
  studentClass.textContent = data.class;
  studentDocuments.textContent = data.documents;


  showPage(dashboardPage);

};

logoutBtn.onclick = () => {
  showPage(studentPage);
};
