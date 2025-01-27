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

</style>
