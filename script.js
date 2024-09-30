function showHome() {
    document.getElementById('content').innerHTML = `
        <h1>Welcome to My Portfolio</h1>
        <p>I am a Front-End Web Developer.</p>
        <p>Skills: HTML, CSS, JavaScript, Bootstrap</p>
        <p>Final Year Project: Online Auto Car Parts Store</p>
    `;
}

function showAbout() {
    document.getElementById('content').innerHTML = `
        <h1>About Me</h1>
        <p>Name: Muhammad Tasleem Ramzan</p>
        <p>Phone: +923094519960</p>
        <p>Email: raootasleemramzan@gmail.com</p>
        <p>Address: Ghosia Chowk Johar Town, Lahore</p>
        <p>I am a fresh graduate in Information Technology from the University of Education Lahore. I am proficient in HTML, CSS, JavaScript, Bootstrap, and more. I am passionate about building responsive and interactive websites. I have experience with front-end development and enjoy learning new technologies to enhance my skills.</p>
    `;
}

function showServices() {
    document.getElementById('content').innerHTML = `
        <h1>My Services</h1>
        <ul>
            <li>Website Development (HTML, CSS, JS, Bootstrap)</li>
            <li>Responsive Design</li>
            <li>JavaScript Integration</li>
            <li>Web Animations</li>
        </ul>
    `;
}

function showProjects() {
    document.getElementById('content').innerHTML = `
        <h1>My Final Year Project</h1>
        <p>Project: Online Auto Car Parts Store</p>
        <p>This project is an online platform for buying auto car parts, allowing users to browse through various products, add items to a cart, and make purchases with ease.</p>
    `;
}

function showContact() {
    document.getElementById('content').innerHTML = `
        <h1>Contact Me</h1>
        <p>Email: raootasleemramzan@gmail.com</p>
        <p>Phone: +923094519960</p>
    `;
}
