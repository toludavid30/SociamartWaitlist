import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import "../styling/styling.css"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between children animations
      delayChildren: 0.2,   // Initial delay for children
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const Hero = () => {
    useEffect(() => {
    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Scroll Animation Logic ---
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once element is visible if you only want it to animate once
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove is-visible class if you want elements to animate again when scrolling back up
                // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset the viewport bottom by 50px for earlier trigger
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // --- Waitlist Form Submission ---
    const waitlistForm = document.querySelector('.waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = waitlistForm.querySelector('input[type="email"]');
            const submitButton = waitlistForm.querySelector('button[type="submit"]');

            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;

            // Simulate API call for waitlist submission
            // In a real app, you would send this email to your backend/email service (e.g., SendGrid)
            // Example:
            // const response = await fetch('/api/waitlist', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email: emailInput.value })
            // });
            // const data = await response.json();

            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

            // For this example, we'll just show a success message
            // if (true /* replace with data.success in real app */) {
            //     waitlistForm.innerHTML = `
            //         <p className="text-success" style="font-size: 1.2rem; font-weight: 600; color: var(--color-white);">
            //             🎉 Thanks for joining the waitlist! We'll keep you updated.
            //         </p>
            //     `;
            // } else {
            //     // Handle error
            //     alert('There was an issue joining the waitlist. Please try again.');
            //     submitButton.textContent = originalButtonText;
            //     submitButton.disabled = false;
            // }
        });
    }

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    }, [])
  return (
    <>
    <header className="header">
        <div className="container ">
            <a href="#" className="logo"><img src="/public/black bg v1 1.png" alt="" /></a>
            {/* <nav>
                <a href="#waitlist-section" className="btn btn-secondary">Join Waitlist</a>
            </nav> */}
        </div>
    </header>

    <section id="hero" className="hero">
        <div className="container">
            <h1 className="hero-headline animate-on-scroll">SociaMart: Grow Your Business, Socially.</h1>
            <p className="hero-subheadline animate-on-scroll">Unlock Growth for Small Businesses: Blend Shopping, Community, Trust.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScDHDoDoBXAaJYVKW2l1XYid3BnbBQj8TPwOkbfeoZtzuOxGQ/viewform?usp=send_form" className="btn btn-primary animate-on-scroll">Join the Waitlist</a>
        </div>
    </section>

    <section id="problem-solution" className="section problem-solution">
        <div className="container">
            <h2 className="section-title animate-on-scroll">Tired of slow growth and limited reach?</h2>
            <p className="section-description animate-on-scroll">SociaMart empowers sellers with a vibrant ecosystem where visibility, trust, and growth all happen in one place.</p>
            <div className="problem-solution-grid">
                <div className="card animate-on-scroll">
                    <img src="https://via.placeholder.com/100x100?text=Problem1" alt="Problem Icon" className="card-icon"/>
                    <h3>Visibility Challenges</h3>
                    <p>Struggling to get your products seen by the right audience?</p>
                </div>
                <div className="card animate-on-scroll">
                    <img src="https://via.placeholder.com/100x100?text=Problem2" alt="Problem Icon" className="card-icon"/>
                    <h3>High Logistics Costs</h3>
                    <p>Expensive shipping eating into your profits and customer satisfaction?</p>
                </div>
                <div className="card animate-on-scroll">
                    <img src="" alt="" />
                    <img src="https://via.placeholder.com/100x100?text=Problem3" alt="Problem Icon" className="card-icon"/>
                    <h3>Lack of Trust</h3>
                    <p>Buyers hesitant due to uncertainty in online transactions?</p>
                </div>
            </div>
        </div>
    </section>

    <section id="features" className="section features bg-light">
        <div className="container">
            <h2 className="section-title animate-on-scroll">Sell Smarter, Faster, Together.</h2>
            <div className="features-grid">
                <div className="feature-item animate-on-scroll">
                    <img src="https://via.placeholder.com/80x80?text=Social" alt="Social Feed Icon" className="feature-icon"/>
                    <h3>In-App Social Feed</h3>
                    <p>Post short product videos, tutorials, and usage tips, just like TikTok.</p>
                </div>
                <div className="feature-item animate-on-scroll">
                    <img src="https://via.placeholder.com/80x80?text=Market" alt="Marketplace Icon" className="feature-icon"/>
                    <h3>Dynamic Marketplace</h3>
                    <p>List your items, connect with new buyers, and expand your reach effortlessly.</p>
                </div>
                <div className="feature-item animate-on-scroll">
                    <img src="https://via.placeholder.com/80x80?text=Store" alt="Personal Store Icon" className="feature-icon"/>
                    <h3>Personal Online Store</h3>
                    <p>Each seller gets a website-style profile page with product listings & analytics.</p>
                </div>
                <div className="feature-item animate-on-scroll">
                    <img src="https://via.placeholder.com/80x80?text=Analytics" alt="Analytics Icon" className="feature-icon"/>
                    <h3>Smart Analytics & Inventory</h3>
                    <p>Gain insights and manage your stock with intuitive, powerful tools.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="trust-logistics" className="section trust-logistics">
        <div className="container">
            <h2 className="section-title animate-on-scroll">Built on Trust, Delivered with Ease.</h2>
            <div className="trust-logistics-content">
                <div className="card animate-on-scroll">
                    <img src="https://via.placeholder.com/100x100?text=Escrow" alt="Escrow Icon" className="card-icon"/>
                    <h3>Secure Escrow Payments</h3>
                    <p>Funds are only released when buyers confirm successful delivery, ensuring safe transactions.</p>
                </div>
                <div className="card animate-on-scroll">
                    <img src="https://via.placeholder.com/100x100?text=Delivery" alt="Delivery Icon" className="card-icon"/>
                    <h3>Affordable In-Area Logistics</h3>
                    <p>Our network of delivery riders makes product delivery faster and more cost-effective.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="future-vision" className="section future-vision bg-light">
        <div className="container">
            <h2 className="section-title animate-on-scroll">Investing in Your Future.</h2>
            <p className="section-description animate-on-scroll">In the near future, SociaMart will introduce financing options, providing loans to help aspiring entrepreneurs start or scale their small businesses.</p>
            <img src="https://via.placeholder.com/300x200?text=Financing+Icon" alt="Financing Icon" className="animate-on-scroll future-icon"/>
        </div>
    </section>

    <section id="waitlist-section" className="section waitlist">
        <div className="container">
            <h2 className="section-title animate-on-scroll">Ready to scale your business?</h2>
            <p className="section-description animate-on-scroll">Join the waitlist today and be among the first to experience SociaMart's social-powered business ecosystem.</p>
            <form className="waitlist-form animate-on-scroll">
                <input type="email" id="email" name="email" placeholder="Your Email Address" required/>
                <button type="submit" className="btn btn-primary">Join the Waitlist</button>
            </form>
            <p className="privacy-note animate-on-scroll">We respect your privacy. No spam, just updates.</p>
        </div>
    </section>

    <footer className="footer">
        <div className="container">
            <p>&copy; <span id="current-year"></span> SociaMart. All rights reserved.</p>
            <div className="social-links">
                <a href="#" target="_blank"><img src="https://via.placeholder.com/24x24?text=FB" alt="Facebook"/>
                </a>
                <a href="#" target="_blank"><img src="https://via.placeholder.com/24x24?text=IG" alt="Instagram"/>
                </a>
                
            </div>
        </div>
    </footer>

    </>
  );
};

export default Hero;