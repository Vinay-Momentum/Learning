
      const questionDiv = document.getElementById("question-div");
      var totalScore = 0;
      const questionsObject = [
        {
          id: 1,
          question:
            "Which data type is used to create a variable that should store text?",
          answers: [
            { label: "Txt", value: "01" },
            { label: "myString", value: "02" },
            { label: "String", value: "03" },
            { label: "string", value: "04" },
          ],
          correctAnswer: "03",
        },
        {
          id: 2,
          question: "Inside which HTML element do we put the JavaScript",
          answers: [
            { label: "Js Tag", value: "05" },
            { label: "Javascript tag", value: "06" },
            {
              label: "script tag",
              value: "07",
            },
            { label: "scripting tag", value: "08" },
          ],
          correctAnswer: "07",
        },
        {
          id: 3,
          question: "What is the implicit return type of constructor?",
          answers: [
            { label: "No Return Type", value: "09" },
            { label: "A class object in which it is defined", value: "10" },
            { label: "void", value: "11" },
            { label: "none", value: "12" },
          ],
          correctAnswer: "10",
        },
        {
          id: 4,
          question:
            "Data members and member functions of a class are private. default. True or False?",
          answers: [
            { label: "True", value: "12" },
            { label: "False", value: "13" },
          ],
          correctAnswer: "12",
        },
        {
          id: 5,
          question: "How do you write 'Hello World' in an alert box?",
          answers: [
            { label: "alertBox('Hello World')", value: "14" },
            { label: "msgBox('Hello World')", value: "15" },
            { label: "alert('Hello World')", value: "16" },
            { label: "msg('Hello World')", value: "17" },
          ],
          correctAnswer: "16",
        },
        {
          id: 6,
          question: "When is the object created with a new keyword?",
          answers: [
            { label: "At Run Time", value: "18" },
            { label: "At Compile Team", value: "19" },
            { label: "Depends on code", value: "20" },
          ],
          correctAnswer: "18",
        },
      ];

      let questionIndex = 0;

      function loadQuestion() {
        const currentQuestion = questionsObject[questionIndex];
        const { question, answers } = currentQuestion;

        questionDiv.innerHTML = `
          <p class="fw-bold">${question}</p>
          <div class="form-check">
            ${answers
              .map(
                (answer) => `
                <div>
                    <input type="radio" class="form-check-input" value="${answer.value}" name="optionname" id="option${answer.value}">
                    <label class="form-check-label" for="option${answer.value}">${answer.label}</label>
                </div>
              `
              )
              .join("")}
          </div>
        `;
      }

      function checkAnswer() {
        const selectedAnswer = document.querySelector(
          'input[name="optionname"]:checked'
        );
        if (!selectedAnswer) {
          alert("Please select an answer.");
          return;
        }

        const userAnswer = selectedAnswer.value;
        const correctAnswer = questionsObject[questionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
          alert("Correct!");
          questionIndex++;
          totalScore++;
          if (questionIndex > questionsObject.length - 1) {
            const scoreDiv = document.getElementById("score-div");
            scoreDiv.innerHTML += `<p>Quiz Completed. Your Total Score is: <span class="text-danger">${totalScore}</span> / ${questionsObject.length}</p>`;
          }
          loadQuestion();
        } else {
          alert("Incorrect. The correct answer is: " + correctAnswer);
          totalScore--;
        }
      }

      loadQuestion();