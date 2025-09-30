import { Link } from 'react-router-dom'

export function TermsService() {
    return (
        <>
        <div style={{ padding: '10px' }}>
            <h1>Terms of Service</h1>
            <br />
            <h3>Last Updated: September 25, 2025</h3>
            <br />
            <p>Welcome to our site: Travel-Booking-System. By signing up for an account or using our website Travel-Booking-Service's APIs, you agree to the following terms. Please read them carefully.</p>
            <br />
            <h2>1. Eligibility</h2>
            <p>You must be at least 18 years old to use our Service. By signing up, you confirm that you meet this requirement.</p>
            <br />
            <h2>2. Account Responsibility</h2>
            <p>When you create an account: <br />
                1. You must provide accurate and complete information. <br />
                2. You are responsible for keeping your password and account secure. <br />
                3. You are responsible for all activity that occurs under your account.</p>
            <br />
            <h2>3. Using the Service</h2>
            <p> 1. Our Service allows you to browse, book, and manage travel reservations. <br />
                2. You agree to use the Service only for lawful purposes. <br />
                3. You agree not to interfere with or harm our Service, servers, or networks.</p>
            <br />
            <h2>4. Travel Bookings</h2>
            <p> 1. Travel bookings are subject to availability and the terms of the travel providers. <br />
                2. Prices, fees, and availability may change without notice. <br />
                3. We are not responsible for cancellations, delays, or other issues caused by travel providers.</p>
            <br />
            <h2>5. Payments</h2>
            <p>1. All payments for bookings must be made in accordance with the instructions on our site. <br />
               2. We may use third-party payment processors to handle payments. <br />
               3. You are responsible for paying all applicable fees, taxes, or charges.</p>
            <br />
            <h2>6. Refunds and Cancellations</h2>
            <p>1. Refunds and cancellations are subject to the policies of the travel providers. <br />
               2. Please review the provider's terms before booking.</p>
            <br />
            <h2>7. Intellectual Property</h2>
            <p>1. All content on the website, including text, images, logos, and designs, is owned by us or our licensors. <br />
               2. You may not copy, reproduce, or use our content without permission.</p>
            <br />
            <h2>8. Privacy</h2>
            <p>1. We collect and use your information in accordance with our Privacy Policy. <br />
               2. By using our Service, you consent to the collection and use of your information as described.</p>
            <br />
            <h2>9. Limitation of Liability</h2>
            <p>1. We provide the Service “as is” and are not responsible for any direct or indirect damages resulting from your use of the Service. <br />
               2. We are not responsible for the acts or omissions of travel providers.</p> 
            <br />
            <h2>10. Changes to Terms</h2>
            <p>1. We may update these Terms at any time. <br />
               2. We will notify you of changes by posting the updated Terms on our website. <br />
               3. Your continued use of the Service constitutes acceptance of the new Terms.</p>
            <br />
            <h2>11. Governing Law</h2>
            <p>1. These Terms are governed by Ohio, USA</p>
            <br />
            <h2>12. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us at: <br />
               tanneradkins1234@gmail.com <br />
               (513) 498-8711</p>
        </div>
            <Link to="/Signup">
                <button>Back to Sign-up</button>
            </Link>
        </>
    );
}