const form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput = nameField.querySelector(".name"),
  surnameField = form.querySelector(".surname-field"),
  surnameInput = surnameField.querySelector(".surname"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword"),
ePassField = form.querySelector(".enter-password"),
  ePassInput = pswdField.querySelector(".ePassword")

// Name Validation
function checkName() {
  const namePattern = /^[a-zA-Z]+$/; // Regex to allow only letters
  if (!nameInput.value.match(namePattern)) {
    return nameField.classList.add("invalid"); //adding invalid class if name value do not mathced with name pattern
  }
  nameField.classList / remove("invalid"); //removing invalid class if name value matched with namePattern
}

// Surname Validation
function checkSurname() {
  const namePattern = /^[a-zA-Z]+$/; // Regex to allow only letters
  if (!surnameInput.value.match(namePattern)) {
    return surnameField.classList.add("invalid"); //adding invalid class if surname value do not mathced with name pattern
  }
  surnameField.classList / remove("invalid"); //removing invalid class if surname value matched with namePattern
}

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emailPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Confirm entering password
function isRightPass() {
  if (ePassInput.value === "") {
    return ePassField.classList.add("invalid");
  }
  ePassField.classList.remove("invalid");
}


// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkName()
  checkSurname()
  checkEmail();
  createPass();
  confirmPass();

  //calling function on key up
  nameInput.addEventListener("keyup", checkName);
  surnameInput.addEventListener("keyup", checkSurname);
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !nameField.classList.contains("invalid") &&
    !surnameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});

// Sample data for demonstration purposes
const recipes = [
  { id: 1, name: 'Spaghetti Carbonara', photo: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Chicken Curry', photo: 'https://via.placeholder.com/100' }
];

// ADDING RECIPES
// Function to add a recipe card
function addRecipe() {
  const recipesContainer = document.getElementById("recipes-container");

  // Create a new recipe card
  const recipeCard = document.createElement("div");
  recipeCard.classList.add("recipe-card");

  // Add recipe image
  const recipeImage = document.createElement("img");
  recipeImage.src = "https://via.placeholder.com/150"; // Placeholder image
  recipeImage.alt = "Recipe Image";

  // Add recipe title
  const recipeTitle = document.createElement("h3");
  recipeTitle.textContent = "New Recipe";

  // Add edit button
  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = "<i class='bx bx-edit'></i>"; // Edit icon
  editButton.onclick = () => editRecipe(recipeCard);

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = "<i class='bx bx-trash'></i>"; // Trash icon
  deleteButton.onclick = () => deleteRecipe(recipeCard);

  // Append elements to the recipe card
  recipeCard.appendChild(recipeImage);
  recipeCard.appendChild(recipeTitle);
  recipeCard.appendChild(editButton);
  recipeCard.appendChild(deleteButton);

  // Append the recipe card to the container
  recipesContainer.appendChild(recipeCard);
}

console.log("script.js loaded");

// Function to edit a recipe
function editRecipe(recipeCard) {
  const recipeTitle = recipeCard.querySelector("h3");
  const newTitle = prompt("Enter the new recipe title:", recipeTitle.textContent);
  if (newTitle) {
    recipeTitle.textContent = newTitle;
  }
}

// Function to delete a recipe
function deleteRecipe(recipeCard) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    recipeCard.remove();
  }
}

function openModal() {
  document.getElementById('recipeModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('recipeModal').style.display = 'none';
}

function saveRecipe() {
  // Получите данные рецепта из iframe
  const iframe = document.getElementById('recipeFrame');
  const recipeData = iframe.contentWindow.getRecipeData(); // Предполагается, что в createrecipe.html есть функция getRecipeData

  // Добавьте рецепт в контейнер рецептов
  const recipesContainer = document.getElementById('recipes-container');
  const recipeCard = document.createElement('div');
  recipeCard.className = 'recipe-card';
  recipeCard.innerHTML = `
        <h3>${recipeData.name}</h3>
        <p>${recipeData.description}</p>
    `;
  recipesContainer.appendChild(recipeCard);

  // Закройте модальное окно
  closeModal();
}

function openModal() {
  document.getElementById('recipeModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('recipeModal').style.display = 'none';
}


console.log("script.js loaded");
document.addEventListener('DOMContentLoaded', function () {
  const recipeFrame = document.getElementById('recipeFrame');
  if (recipeFrame) {
    recipeFrame.addEventListener('load', function () {
      console.log("iframe loaded");
    });
  }
  console.log("script.js loaded");

  function validateForm() {
    const iframe = document.getElementById('recipeFrame');
    if (!iframe) return false;

    try {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const inputs = iframeDocument.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        const errorMessage = iframeDocument.getElementById(`${input.id}-error`);
        if (!input.value.trim()) {
          if (errorMessage) {
            errorMessage.textContent = 'This field is required.';
          }
          isValid = false;
        } else {
          if (errorMessage) {
            errorMessage.textContent = '';
          }
        }
      });

      return isValid;
    } catch (e) {
      console.error("Cross-origin access error:", e);
      return false;
    }
  }

  function saveRecipe() {
    console.log("saveRecipe called");
    if (validateForm()) {
      closeModal();
      alert('Recipe saved successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  }

  function closeModal() {
    const modal = document.getElementById('recipeModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  const saveButton = document.getElementById('saveButton');
  if (saveButton) {
    saveButton.addEventListener('click', saveRecipe);
  }
});






