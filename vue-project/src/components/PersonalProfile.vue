<template>
  <div>
    <!-- Header -->
    <header class="sticky-header">
      <div class="header-content">
        <img src="@/assets/icons/kpIcon.png" alt="Kyla Pantino Icon" class="header-icon" />
        <h1>Kyla Amor's Portfolio</h1>
      </div>
      <nav class="nav-links">
        <router-link to="#home">Home</router-link>
        <router-link to="#about">About Me</router-link>
        <router-link to="#gallery">Picture Gallery</router-link>
        <router-link to="#contact">Contact</router-link>
      </nav>
    </header>

    <!-- Home Section -->
    <section id="home" class="home">
      <div class="home-content">
        <img src="@/assets/pics/profile.svg" alt="Profile Picture" class="profile-pic-large" />
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
        <img src="@/assets/icons/educIcon.png" alt="Education Icon" class="about-icon" />
        <div class="about-text">
          <h3>Education</h3>
          <p>
            <strong>2010-2016:</strong> Elementary School - St. Scholastica's Academy<br />
            <strong>2016-2022:</strong> High School - Information and Communication Technology High School<br />
            <strong>2022 - Present:</strong> College - Asia Pacific College
          </p>
        </div>
      </div>

      <div class="about-item reverse">
        <div class="about-text">
          <h3>Hobbies & Interests</h3>
          <p>
            <img src="@/assets/icons/vb.png" alt="Volleyball Icon" class="inline-icon" /> Volleyball<br />
            <img src="@/assets/icons/games.png" alt="Genshin Icon" class="inline-icon" /> Genshin Impact<br />
            <img src="@/assets/icons/movie.png" alt="Movies Icon" class="inline-icon" /> Binge Watching Movies & Series
          </p>
        </div>
        <img src="@/assets/icons/hobbiess.png" alt="Hobbies Icon" class="about-icon" />
      </div>

      <div class="about-item">
        <img src="@/assets/icons/code.png" alt="IT Experience Icon" class="about-icon" />
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
        <img src="@/assets/pics/kylapic1.jpg" alt="Kyla Picture 1" />
        <img src="@/assets/pics/kylapic2.jpg" alt="Kyla Picture 2" />
        <img src="@/assets/pics/kylapic3.jpg" alt="Kyla Picture 3" />
        <img src="@/assets/pics/kylapic4.jpg" alt="Kyla Picture 4" />
        <img src="@/assets/pics/kylapic5.jpg" alt="Kyla Picture 5" />
        <img src="@/assets/pics/kylapic6.jpg" alt="Kyla Picture 6" />
        <img src="@/assets/pics/kylapic7.jpg" alt="Kyla Picture 7" />
        <img src="@/assets/pics/kylapic8.jpg" alt="Kyla Picture 8" />
        <img src="@/assets/pics/kylapic9.jpg" alt="Kyla Picture 9" />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="contact-content">
        <img src="@/assets/icons/contactIcon.png" alt="Contact Icon" class="contact-icon" />
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
          <li><a href="https://www.w3schools.com/vue/vue_forms.php">Vue Forms</a></li>
          <li><a href="https://www.w3schools.com/vue/vue_v-for.php">Vue v-For</a></li>
          <li>Special thanks to ChatGPT who identifies my errors :)))</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  background-color: #f4f4f9;
  color: #333;
}

h1, h2, h3 {
  color: #444;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: #4a90e2;
  color: #fff;
  padding: 1rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
}

.header-icon {
  height: 50px;
  margin-right: 10px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffe600;
}

section {
  padding: 2rem;
  margin: 1rem auto;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}

.profile-pic-large {
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .sticky-header {
    flex-direction: column;
  }

  .nav-links {
    margin-top: 10px;
  }
}
</style>
