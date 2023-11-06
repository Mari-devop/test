
//navbar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
});

//section About
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e) {
    //getting our btns by target and dataset
    const id = e.target.dataset.id;
    
    if(id) {
    //remove active from other buttons
    btns.forEach(function(btn){
        btn.classList.remove("active");
        e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach(function(article){
        article.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active');
    }
})


//question section 
const questions = document.querySelectorAll('.question');
questions.forEach(function(question) {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function() {
      questions.forEach(function(item) {
          if(item !== question){
              item.classList.remove("shoe-text")
          }
      })

      question.classList.toggle("show-text")
  })
})

