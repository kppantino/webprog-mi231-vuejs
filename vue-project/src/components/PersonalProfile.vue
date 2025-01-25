<template>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personal Website</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/myStyle.css?version=0.1">
  <link rel="stylesheet" href="css/gallery.css">
  <link rel="stylesheet" href="css/suggestions.css">
  <link rel="icon" type="image/png" href="./icons/kpIcon.png">
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>
<body>

<!-- Header -->
<header class="sticky-header">
    <div class="header-content">
      <img src="icons/kpIcon.png" alt="Kyla Pantino Icon" class="header-icon">
      <h1> Kyla Amor's Portfolio</h1>
    </div>
    <nav class="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#gallery">Picture Gallery</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  <!-- Home Section -->
  <section id="home" class="home">
    <img src="pics/profile.svg" alt="Profile Picture" class="profile-pic-large">
    <div class="home-content">
      <div class="intro-text">
        <h2>Hello, I'm Kyla Amor Pantino!</h2>
        <p>
          I'm a 20-year-old third-year student at Asia Pacific College, 
          pursuing a Bachelor of Science in Information Technology with a 
          specialization in Mobile and Internet Technology. Currently, I'm diving 
          into the world of web development through my Website Programming class, 
          where I'm learning how to bring creative ideas online. Thanks for stopping by, 
          and feel free to explore!
        </p>
      </div>
    </div>
  </section>

  
 <!-- About Me Section -->
<section id="about" class="about-me">
    <h2>About Me</h2>
  
    <div class="about-item">
      <img src="icons/educIcon.png" alt="Education Icon" class="about-icon">
      <div class="about-text">
        <h3>Education</h3>
        <p>
          <strong>2010-2016:</strong> Elementary School - St. Scholastica's Academy<br>
          <strong>2016-2022:</strong> High School - Information and Communication Technology High School<br>
          <strong>2022 - Present:</strong> College - Asia Pacific College
        </p>
      </div>
    </div>
  
    <div class="about-item reverse">
      <div class="about-text">
        <h3>Hobbies & Interests</h3>
        <p>
          <img src="icons/vb.png" alt="Volleyball Icon" class="inline-icon"> Volleyball<br>
          <img src="icons/games.png" alt="Genshin Icon" class="inline-icon"> Genshin Impact<br>
          <img src="icons/movie.png" alt="Movies Icon" class="inline-icon"> Binge Watching Movies & Series
        </p>
      </div>
      <img src="icons/hobbiess.png" alt="Hobbies Icon" class="about-icon">
    </div>
  
    <div class="about-item">
      <img src="icons/code.png" alt="IT Experience Icon" class="about-icon">
      <div class="about-text">
        <h3>IT Experience</h3>
        <p>
          HTML, CSS, JavaScript, PHP, MySQL, PowerBI, Tableau, Laravel, Frappe
        </p>
      </div>
    </div>
  </section>  

  <!-- Picture Gallery Section -->
  <section id="gallery" class="gallery">
    <h2>Picture Gallery</h2>
    <div class="gallery-grid">
      <img src="pics/kylapic1.jpg" alt="Kyla Picture 1">
      <img src="pics/kylapic2.jpg" alt="Kyla Picture 2">
      <img src="pics/kylapic3.jpg" alt="Kyla Picture 3">
      <img src="pics/kylapic4.jpg" alt="Kyla Picture 4">
      <img src="pics/kylapic5.jpg" alt="Kyla Picture 5">
      <img src="pics/kylapic6.png" alt="Kyla Picture 6">
      <img src="pics/kylapic7.jpg" alt="Kyla Picture 7">
      <img src="pics/kylapic8.jpg" alt="Kyla Picture 8">
      <img src="pics/kylapic9.JPG" alt="Kyla Picture 9">
      <img src="pics/kylapic10.JPG" alt="Kyla Picture 10">
    </div>
  </section>
  
<!-- Contact Section -->
<section id="contact" class="contact">
    <div class="contact-content">
      <img src="icons/contactIcon.png" alt="Contact Icon" class="contact-icon">
      <h2>Contact Me!</h2>
      <p>Email: <a href="mailto:kppantino@student.apc.edu.ph">kppantino@student.apc.edu.ph</a></p>
      <p>Facebook: <a href="https://www.facebook.com/kyla.pantino/">Kyla Pantino</a></p>
      <p>Instagram: <a href="https://www.instagram.com/kylapantino/">@kylapantino</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/kyla-amor-pantino-630755248/">Kyla Amor Pantino</a></p>
    </div>
  </section>

  <!-- References Section -->
<section id="references" class="references">
    <h2>References</h2>
    <div class="references-list">
      <ul>
        <li>
        <a href="https://www.w3schools.com/vue/vue_forms.php">Vue Forms</a>
        </li>
        <li>
            <a href="https://www.w3schools.com/vue/vue_v-for.php">Vue v-For</a>
        </li>
        <li>
            Special thanks to ChatGPT who identifies my errors :)))
        </li>
      </ul>
    </div>
  </section>

  <div id="suggestions" class="container guestbook-container">
    <div class="header">
      <div class="title-container">Suggestions</div>
    </div>
    <form @submit.prevent="addSuggest">
      <div>
        <p>
          Name: <br>
          <input type="text" v-model="guestName" placeholder="Enter your name" required />
        </p>
        <p>
          Suggestions? <br>
          <textarea v-model="guestSuggest" placeholder="Write your suggestions here" rows="4" required></textarea>
        </p>
        <button type="submit">Submit</button>
      </div>
    </form>
    <div class="comment-section">
      <div v-for="suggest in Suggestions" :key="suggest.id" class="suggest">
        <p><strong>{{ suggest.name }}</strong></p>
        <p>{{ suggest.message }}</p>
      </div>
    </div>
</div>

</template>

<style>
/* General Styles */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #000000;
  color: #FFE0E9;
  margin: 0;
  padding: 0;
}

/* Sticky Header */
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #52182b, #8A2846);
  padding: 10px 50px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.45);

}

.header-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-icon {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.sticky-header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #FFC2D4;
}

.nav-links {
  display: flex;
  gap: 20px; 
  align-items: center; 
}

.nav-links a {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #FFE0E9;
  text-decoration: none;
  padding: 5px 10px; 
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Home Section */
.home {
  text-align: center;
  padding: 40px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap:40px; 
  background: rgba(0, 0, 0, 0.5); 
  border-radius: 15px;
  margin: top 45px;
  margin-bottom: 45px;
}

.profile-pic-large {
  width: 220px;
  height:220px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin: 0; 
}

.home-content {
  text-align: left; 
}

.home-content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem; 
  margin-bottom: 100px;
}

.home-content p {
  font-size: 1.2rem; 
  line-height: 1.6; 
  max-width: 600px; 
  margin: 0;
}


/* About Me Section */
.about-me {
  padding: 50px 150px; 
  background: black
}

.about-me h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #FFE0E9;
  text-align: center;
  margin-bottom: 30px;
}

.about-item {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
}

.about-item.reverse {
  flex-direction: row-reverse;
}

.about-icon {
  width: 170px;
  height: 170px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.about-text {
  font-family: 'Poppins', sans-serif;
  color: #FFE0E9;
  max-width: 600px;
}

.about-text h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.about-text p {
  font-size: 1rem;
  line-height: 1.5;
}

.inline-icon {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}


/* Contact Section */
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 20px;
  background-color: #000;
  color: #FFE0E9;
  text-align: center;
}

.contact-content {
  background: linear-gradient(to bottom, #000,#602437);
  padding: 30px;
  border-radius: 15px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.contact-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.contact h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  margin: 10px 0;
  color: #FFE0E9;
  font-size: 1rem; 
}

.contact a {
  color: #FFE0E9;
  text-decoration: none;
  font-size: 1rem; 
}

.contact a:hover {
  text-decoration: underline;
  color: #FF9EBB;
  font-size: 1rem; 
}

/* References Section */
.references {
  padding: 50px 20px;
  background-color: #000;
  color: #FFE0E9;
  text-align: center;
}

.references h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #FF9EBB;
}

.references-list ul {
  list-style-type: none;
  padding: 0;
}

.references-list li {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  margin: 15px 0;
  color: #FFE0E9;
}

.references-list a {
  color: #FF9EBB;
  text-decoration: none;
}

.references-list a:hover {
  text-decoration: underline;
  color: #FFE0E9;
}

.gallery {
    padding: 40px;
    text-align: center;
    font-family: 'Playfair Display', serif;
  }
  
  .gallery-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .gallery-grid img {
    width: 200px;
    height: auto; 
    max-height: 300px; 
    object-fit: cover; 
    border-radius: 15px; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
    transition: transform 0.3s ease; 
  }
  
  .gallery-grid img:hover {
    transform: scale(1.05); 
  }


  }</style>   