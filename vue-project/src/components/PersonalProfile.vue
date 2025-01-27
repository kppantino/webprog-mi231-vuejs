<template>
  <div>
    <!-- Header -->
    <header class="sticky-header">
      <div class="header-content">
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
            Volleyball<br />
            Genshin Impact<br />
            Binge Watching Movies & Series
          </p>
        </div>
      </div>

      <div class="about-item">
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
        <!-- No images -->
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="contact-content">
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
export default {
  name: "Portfolio",
};
</script>

<style scoped>
/***************************
  General Styling
***************************/
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

/***************************
  Header Styling
***************************/
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

/***************************
  Section Styling
***************************/
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

/***************************
  Responsive Design
***************************/
@media (max-width: 768px) {
  .sticky-header {
    flex-direction: column;
  }

  .nav-links {
    margin-top: 10px;
  }
}
</style>
