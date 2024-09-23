// Dynamically add content to the website
document.addEventListener('DOMContentLoaded', () => {
    // Add 3D background with various shapes
    init3DBackground();

    // Dynamic content sections
    const contentSections = {
        mission: `
            <section id="mission">
                <h2>Our Mission</h2>
                <p>At <strong>PrintXpress GSV</strong>, our mission is to provide the most affordable, reliable, and fastest printing services at GSV...</p>
            </section>
        `,
        about: `
            <section id="about">
                <h2>About PrintXpress GSV</h2>
                <p><strong>PrintXpress GSV</strong> is a dynamic and innovative printing company tailored specifically for the needs of students...</p>
            </section>
        `,
        whatWeOffer: `
            <section id="what-we-offer">
                <h2>What We Offer</h2>
                <ul>
                    <li><strong>Report File:</strong> Single-sided and double-sided printing in both black-and-white and color.</li>
                    <li><strong>Lab Manuals:</strong> Professionally printed manuals for students.</li>
                    <li><strong>Spiral Binding:</strong> Offering spiral-bound documents for easy usage.</li>
                    <li><strong>Poster Prints:</strong> High-quality poster prints for presentations and events.</li>
                    <li><strong>Custom Solutions:</strong> Need something unique? We tailor printing solutions to meet your specific requirements.</li>
                </ul>
            </section>
        `,
        featuredProducts: `
            <section id="featured-products">
                <h2>Our Featured Products</h2>
                <div class="product-images">
                    <div class="product">
                        <img src="images/lab_manual.jpg" alt="Lab Manual">
                        <h3>Lab Manual</h3>
                        <p>₹50</p>
                    </div>
                    <div class="product">
                        <img src="images/spiral_binding.jpg" alt="Spiral Binding">
                        <h3>Spiral Binding</h3>
                        <p>₹25</p>
                    </div>
                    <div class="product">
                        <img src="images/posters.jpg" alt="Posters">
                        <h3>Posters</h3>
                        <p>₹30</p>
                    </div>
                    <div class="product">
                        <img src="images/black_white.jpg" alt="Black and White Prints">
                        <h3>Black & White Prints</h3>
                        <p>₹1.5 per page</p>
                    </div>
                    <div class="product">
                        <img src="images/cup_print.jpg" alt="Cup Print">
                        <h3>Cup Print</h3>
                        <p>₹150</p>
                    </div>
                    <div class="product">
                        <img src="images/passport_photo.jpg" alt="Passport Size Photo">
                        <h3>Passport Size Photo</h3>
                        <p>₹100 for 30</p>
                    </div>
                    <div class="product">
                        <img src="images/copies_registers.jpg" alt="Copies/Registers">
                        <h3>Copies/Registers</h3>
                        <p>₹2 per copy</p>
                    </div>
                    <div class="product">
                        <img src="images/tshirts.jpg" alt="T-Shirts">
                        <h3>T-Shirts</h3>
                        <p>₹300</p>
                    </div>
                </div>
            </section>
        `,
        whyChooseUs: `
            <section id="why-choose-us">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li><strong>Affordability:</strong> We pride ourselves on offering the lowest prices at GSV...</li>
                    <li><strong>Speed:</strong> With "Xpress" in our name, we guarantee a rapid printing process...</li>
                    <li><strong>Quality:</strong> Whether it’s a simple black-and-white print or a vibrant color poster...</li>
                    <li><strong>Convenience:</strong> Our service is designed for the university community...</li>
                </ul>
            </section>
        `,
        vision: `
            <section id="vision">
                <h2>Our Vision</h2>
                <p>As we grow, <strong>PrintXpress GSV</strong> aims to expand its services beyond GSV...</p>
            </section>
        `,
        servicesOffered: `
            <section id="services-offered">
                <h2>Services Offered</h2>
                <ul>
                    <li>Books, Maps, Assignments, Projects, Reports</li>
                    <li>Laboratory Manual, Posters, Banners, Hoarding, T-Shirts, and Notebooks Printing Service</li>
                    <li>Binding, Xerox (Colour and Black-and-White), and Lamination Services delivered to your hostel room.</li>
                </ul>
            </section>
        `,
        contactUs: `
            <section id="contact-us">
                <h2>Contact Us</h2>
                <p>For more information or to place an order, contact us via WhatsApp at <strong>9555052460</strong> or email at <strong>shivansh.gupta_btech23@gsv.ac.in</strong>.</p>
                <p>You can also place your orders using our Google Form: <a href="https://forms.gle/PPLmWcNXL3k8QyLCA" target="_blank">Order Now</a></p>
            </section>
        `
    };

    // Append each section to the document's dynamic content container
    const dynamicContainer = document.getElementById('dynamic-content');
    Object.values(contentSections).forEach(sectionHTML => {
        dynamicContainer.insertAdjacentHTML('beforeend', sectionHTML);
    });

    // Function to initialize 3D background with improved shapes
    function init3DBackground() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, 400);
        document.getElementById('3d-background').appendChild(renderer.domElement);

        // Improved 3D shapes with higher quality
        const shapes = [
            new THREE.IcosahedronGeometry(0.5, 2),  // Icosahedron
            new THREE.OctahedronGeometry(0.5),      // Octahedron
            new THREE.CylinderGeometry(0.5, 0.5, 1, 32), // Cylinder
            new THREE.DodecahedronGeometry(0.5),    // Dodecahedron
            new THREE.TorusKnotGeometry(0.3, 0.1, 100, 16) // Torus Knot
        ];

        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false }),
            new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false }),
            new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false }),
            new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: false }),
            new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: false }),
            new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: false }),
        ];

        for (let i = 0; i < 15; i++) {
            const geometry = shapes[Math.floor(Math.random() * shapes.length)];
            const material = materials[Math.floor(Math.random() * materials.length)];
            const shape = new THREE.Mesh(geometry, material);
            shape.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
            scene.add(shape);
        }

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            scene.children.forEach(shape => {
                shape.rotation.x += 0.01;
                shape.rotation.y += 0.01;
                shape.position.x += Math.sin(shape.rotation.y) * 0.01;
                shape.position.z += Math.cos(shape.rotation.y) * 0.01;
            });
            renderer.render(scene, camera);
        }

        animate();
    }
});
