const titleScreen = {
  title: "Quick knowledge check!",
  image_on: false,
  image: "",
  image_above_60: "",
  image_above_40: "",
  image_below_40: "",
  end_image_on: false,
  end_image: "",
  end_comment_90: "Incredible!",
  end_comment_70: "Well done!",
  end_comment_60: "Well tried!",
  end_comment_40: "You can do better!",
  end_comment_0: "Please click try again...",
};

const design = {
  btnColour: {
    start_btn: "#534092",
    question_btn: "#534092",
    check_result_btn: "#534092",
    next_btn: "#534092",
    try_again_btn: "#534092",
  },
  btnFontColour: {
    start_btn: "white",
    question_btn: "white",
    check_result_btn: "white",
    next_btn: "white",
    try_again_btn: "white",
  },
  textFontColour: {
    questionFontColour: "white",
    titleFontColour: "white",
    scoreFontColour: "white",
    endCommentFontColour: "white",
    endScoreColour: "white",
  },
  changeAllFontColour: true,
  allFontColour: "white",
  backgroundColour: "rgba(0, 0, 0, 0.463)",
  backgroundImage:
    "https://a.storyblok.com/f/112136/1920x1080/89cb45339a/colour-bg-2.jpg",
  incorrectColour: "white",
  incorrectFontColour: "#172B49",
  correctColour: "#01a101",
  correctFontColour: "white",
  correctBoxShadow: "none", // write "none" for no box-shadow
  incorrectBoxShadow: "red", // write "none" for no box-shadow
};

const allQuestions = [
  {
    question_string:
      "Which two elements of the RETHINK Social Media Model do you only need to decide once?",
    correct_text: "✔ Well done! You are correct.",
    incorrect_text:
      "❌Incorrect! The correct answer is Right Niche & Evaluate Who Your Ideal People Are",
    choices: {
      all_choices: [
        "Right Niche & Help for Free",
        "Target the Right Traffic & Know Your Numbers",
        "Evaluate Who Your Ideal People Are & Immediate Upsell",
        "Right Niche & Evaluate Who Your Ideal People Are",
      ],
      correct: "Right Niche & Evaluate Who Your Ideal People Are",
    },
  },
];

const question = document.getElementById("question");
const mainContainer = document.getElementById("mainContainer");
const choice = document.getElementById("choice");
const nextBtn = document.getElementById("next");
const resultCheck = document.getElementById("resultCheck");
const tryAgain = document.getElementById("tryAgain");
const counterContainer = document.getElementById("counterContainer");
const score = document.getElementById("score");
const counter = document.getElementById("counter");
const title = document.getElementById("title");
const titleContainer = document.getElementById("titleContainer");
const header = document.getElementById("header");
const start = document.getElementById("start");
const endComment = document.getElementById("endComment");
const navigation = document.getElementById("navigation");
const image = document.getElementById("image");
const endImage = document.getElementById("endImage");
const container = document.getElementById("choicePageContainer");

title.textContent = titleScreen.title;
score.textContent = 0;
endScore.style.display = "none";
endComment.style.display = "none";
endImage.style.display = "none";

start.style.backgroundColor = design.btnColour.start_btn;
start.style.color = design.btnFontColour.start_btn;
mainContainer.style.background = design.backgroundColour;
mainContainer.style.backgroundImage = `url(${design.backgroundImage})`;
tryAgain.style.backgroundColor = design.btnColour.try_again_btn;
tryAgain.style.color = design.btnFontColour.try_again_btn;
nextBtn.style.backgroundColor = design.btnColour.next_btn;
nextBtn.style.color = design.btnFontColour.next_btn;
resultCheck.style.backgroundColor = design.btnColour.check_result_btn;
resultCheck.style.color = design.btnFontColour.check_result_btn;
question.style.color = design.textFontColour.questionFontColour;
endComment.style.color = design.textFontColour.endCommentFontColour;
endScore.style.color = design.textFontColour.endScoreColour;
counterContainer.style.color = design.textFontColour.scoreFontColour;
title.style.color = design.textFontColour.titleFontColour;

if (design.changeAllFontColour) {
  start.style.color = design.allFontColour;
  tryAgain.style.color = design.allFontColour;
  nextBtn.style.color = design.allFontColour;
  resultCheck.style.color = design.allFontColour;
  question.style.color = design.allFontColour;
  endComment.style.color = design.allFontColour;
  endScore.style.color = design.allFontColour;
  counterContainer.style.color = design.allFontColour;
  title.style.color = design.allFontColour;
}

if (titleScreen.image_on) {
  image.src = titleScreen.image;
} else {
  image.style.display = "none";
}

let i = 0;
let count = allQuestions.length;

counter.textContent = count;
header.style.display = "none";

const choicePages = [];
const choicePage = document.createElement("div");
allQuestions.forEach((object) => {
  console.log(object.choices.all_choices);
  choicePage.className = "choices";
  choicePage.id = "choices";
  choicePages.push(choicePage);
});

const selected = (event) => {
  resultCheck.style.display = "flex";

  choiceElements.forEach((element) => {
    element.classList.remove("selected");
  });
  if (event.currentTarget.classList.contains("selected")) {
    event.currentTarget.classList.remove("selected");
  } else {
    event.currentTarget.classList.add("selected");
  }
};

const choiceElements = [];
j = 0;
allQuestions[0].choices.all_choices.forEach((element) => {
  const choiceElement = document.createElement("div");
  choiceElement.className = "choice";
  choiceElement.textContent = allQuestions[0].choices.all_choices[j];
  choiceElements.push(choiceElement);
  choicePages[0].appendChild(choiceElement);
  choiceElement.style.setProperty(
    "background-color",
    design.btnColour.question_btn
  );
  choiceElement.style.setProperty("color", design.btnFontColour.question_btn);
  if (design.changeAllFontColour) {
    choiceElement.style.setProperty("color", design.allFontColour);
  }
  choiceElement.addEventListener("click", selected);
  j++;
});

const beginQuiz = () => {
  titleContainer.style.display = "none";
  mainContainer.style.justifyContent = "top!important";
  header.style.display = "flex";
  question.textContent = allQuestions[0].question_string;
  container.appendChild(choicePages[0]);
};
start.addEventListener("click", beginQuiz);

let r = 0;
let s = 0;
const checkResult = () => {
  choicePage.childNodes.forEach((element) => {
    if (
      element.classList.contains("selected") &&
      element.textContent === allQuestions[r].choices.correct
    ) {
      element.textContent = allQuestions[r].correct_text;
      element.classList.add("correct");
      element.classList.remove("selected");
      element.style.setProperty("background-color", design.correctColour);
      element.style.setProperty("color", design.correctFontColour);
      element.style.setProperty(
        "box-shadow",
        `0 0 5px 4px ${design.correctBoxShadow}`
      );
      container.style.pointerEvents = "none";
      resultCheck.style.pointerEvents = "none";
      nextBtn.style.display = "flex";
      score.textContent = ++s;
    } else if (
      element.classList.contains("selected") &&
      element.textContent != allQuestions[r].choices.correct
    ) {
      element.textContent = allQuestions[r].incorrect_text;
      element.classList.add("incorrect");
      element.style.setProperty("background-color", design.incorrectColour);
      element.style.setProperty("color", design.incorrectFontColour);
      element.style.setProperty(
        "box-shadow",
        `0 0 5px 4px ${design.incorrectBoxShadow}`
      );
      element.classList.remove("selected");
      container.style.pointerEvents = "none";
      resultCheck.style.pointerEvents = "none";
      nextBtn.style.display = "flex";
    } else if (
      !element.classList.contains("selected") &&
      element.textContent === allQuestions[r].choices.correct
    ) {
      element.classList.add("correct");
      element.style.setProperty("background-color", design.correctColour);
      element.style.setProperty("color", design.correctFontColour);
      element.style.setProperty(
        "box-shadow",
        `${design.correctBoxShadow} 0 0 5px 4px `
      );
    }
  });
  r++;
};
resultCheck.addEventListener("click", checkResult);

let n = 0;
const loadNext = () => {
  const max = allQuestions.length - 1;
  nextBtn.style.display = "none";
  let c = 0;
  container.style.pointerEvents = "all";
  resultCheck.style.pointerEvents = "all";
  if (n < max) {
    n++;
    const questions = document.querySelectorAll(".choice");
    questions.forEach((element) => {
      choicePage.removeChild(element);
    });
    allQuestions[n].choices.all_choices.forEach((element) => {
      const newChoice = document.createElement("div");
      newChoice.style.setProperty(
        "background-color",
        design.btnColour.question_btn
      );
      newChoice.style.setProperty("color", design.btnFontColour.question_btn);
      if (design.changeAllFontColour) {
        newChoice.style.setProperty("color", design.allFontColour);
      }
      newChoice.className = "choice";
      choicePage.appendChild(newChoice);
      newChoice.textContent = allQuestions[n].choices.all_choices[c];
      question.textContent = allQuestions[n].question_string;
      newChoice.addEventListener("click", (event) => {
        document.querySelectorAll(".choice").forEach((element) => {
          element.classList.remove("selected");
        });
        if (event.currentTarget.classList.contains("selected")) {
          event.currentTarget.classList.remove("selected");
        } else {
          event.currentTarget.classList.add("selected");
        }
      });
      c++;
    });
  } else {
    const choices = document.getElementById("choices");
    const endScore = document.getElementById("endScore");
    choices.style.display = "none";
    nextBtn.style.display = "none";
    resultCheck.style.display = "none";
    endComment.style.display = "flex";
    tryAgain.style.display = "flex";
    question.textContent = "Your Score";
    endScore.style.display = "flex";
    endScore.textContent = `${score.textContent} / ${counter.textContent}`;
    counterContainer.style.display = "none";
    navigation.style.justifyContent = "center";
    let mark = (Number(score.textContent) / count) * 100;
    if (mark >= 90) {
      endComment.textContent = titleScreen.end_comment_90;
      if (titleScreen.end_image_on) {
        endImage.src = titleScreen.image_above_60;
        endImage.style.display = "flex";
      } else {
        endImage.style.display = "none";
      }
    } else if (mark >= 70) {
      endComment.textContent = titleScreen.end_comment_70;
      if (titleScreen.end_image_on) {
        endImage.src = titleScreen.image_above_60;
        endImage.style.display = "flex";
      } else {
        endImage.style.display = "none";
      }
    } else if (mark >= 60) {
      endComment.textContent = titleScreen.end_comment_60;
      if (titleScreen.end_image_on) {
        endImage.src = titleScreen.image_above_60;
        endImage.style.display = "flex";
      } else {
        endImage.style.display = "none";
      }
    } else if (mark >= 40) {
      endComment.textContent = titleScreen.end_comment_40;
      if (titleScreen.end_image_on) {
        endImage.src = titleScreen.image_above_40;
        endImage.style.display = "flex";
      } else {
        endImage.style.display = "none";
      }
    } else if (mark >= 0) {
      endComment.textContent = titleScreen.end_comment_0;
      if (titleScreen.end_image_on) {
        endImage.src = titleScreen.image_below_40;
        endImage.style.display = "flex";
      } else {
        endImage.style.display = "none";
      }
    }
  }
};
nextBtn.addEventListener("click", loadNext);

const reset = () => {
  window.location.reload();
};
tryAgain.addEventListener("click", reset);
