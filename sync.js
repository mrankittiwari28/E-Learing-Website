js file      ------------------------                                                                                                                                                      // JavaScript code for additional functionality

// Submit form event listeners
document.querySelector("#signup form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle sign up form submission
  });
  
  document.querySelector("#upload form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle upload form submission
  });
  
  document.querySelector("#assessments button").addEventListener("click", function(event) {
    event.preventDefault();
    // Handle assessment submission
  });
  
  const chatBody = document.getElementById("chat-body");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");
  
  const qaPairs = [
    {
      questions: ["What courses do you offer", "What subjects are covered in your courses","course", "Tell me about your course offerings","courses"],
      answer: "We offer a wide range of courses in various subjects such as programming, design, business, and more. You can explore our course catalog on our website to see the full range of subjects we cover."
    },
    {
      questions: ["How can I enroll in a course","enrollment","enroll", "What is the enrollment process", "How do I sign up for a course"],
      answer: "To enroll in a course, visit our website and browse through the available courses. Once you find a course of interest, click on the enroll button and follow the instructions to complete the enrollment process. You may need to create an account or sign in before you can enroll in a course."
    },
    {
      questions: ["Can I access the course materials after completion", "Do I have lifetime access to the course", "What happens after I finish a course"],
      answer: "Yes, once you successfully complete a course, you will have lifetime access to the course materials and any future updates. You can revisit the course content at any time, even after you've completed the course. We encourage our learners to revisit the materials to reinforce their knowledge or refresh their skills."
    },
    {
      questions:["what are you","how can you help me","help"],
      answer: "Hi there i am Dev .I am an ai cretaed for better communication and interaction.I can help you in guiding through website.Try asking me about courses and enrollment process. ",
    },
     { questions: ["Hi how are you","I am fine","fine"],
      answer: "I am fine.How are you"
     },
     {
      questions: ["signup","Signup"],
      answer: "For signup go above and fill your informations in and press Signup button"
     },
     {
      questions: ["Online Assesments","online assesments","assesment"],
      answer: "pick the correct answer and submit it.You will get notified about your score and upcoming assesments on your email"
     }
    // Add more question-answer sets here
  ];
  
  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  
  function sendMessage() {
    const message = userInput.value;
    if (message.trim() !== "") {
      displayMessage(message, "user");
      respondToMessage(message);
      userInput.value = "";
    }
  }
  
  function respondToMessage(message) {
    let matchedQA = null;
  
    for (const qa of qaPairs) {
      if (qa.questions.some(q => message.toLowerCase().includes(q.toLowerCase()))) {
        matchedQA = qa;
        break;
      }
    }
  
    if (matchedQA) {
      displayMessage(matchedQA.answer, "bot");
    } else {
      displayMessage("I'm sorry, I don't have an answer for that question. Please contact our support team for assistance.", "bot");
    }
  }
  
  function displayMessage(message, sender) {
    const chatMessage = document.createElement("div");
    chatMessage.className = `chat-message ${sender}`;
    chatMessage.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(chatMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  function openPopup() {
    var popup = window.open("", "Manage Users", "width=400,height=300");
    popup.document.write(`
      <html>
      <head>
        <title>Manage Users</title>
      </head>
      <body>
        <h2>Manage Users</h2>
        <p>If you are a new user, sign up:</p>
        <form onsubmit="handleSignup(event)">
          <input type="text" placeholder="Name" id="name">
          <input type="email" placeholder="Email" id="email">
          <input type="password" placeholder="Password" id="password">
          <button type="submit">Sign Up</button>
        </form>
        
        
        
        <script>
          function handleSignup(event) {
            event.preventDefault();
            var name = popup.document.getElementById("name").value;
            var email = popup.document.getElementById("email").value;
            var password = popup.document.getElementById("password").value;
            
            // Perform signup logic here
            // For demonstration, showing an alert with the entered information
            alert("Signed up!\nName: " + name + "\nEmail: " + email + "\nPassword: " + password);
          }
          }
        </script>
      </body>
      </html>
    `);
  }
      
  function myfunc(){
    alert('check email for signup,verification,scores andcourse enrollment process');
  }