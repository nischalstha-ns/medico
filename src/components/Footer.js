"use client";

import { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Footer() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      if (!db) {
        throw new Error("Firebase not initialized. Check your .env.local and firebaseConfig.");
      }

      const docRef = await addDoc(collection(db, "messages"), {
        message: message,
        timestamp: serverTimestamp()  // Use serverTimestamp for consistency
      });

      console.log("Document written with ID: ", docRef.id);
      setMessage('');
      alert('Message sent successfully!');

    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmissionError("Failed to send message. Please try again.");  // Display a user-friendly error
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <footer style={footerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          required
          style={inputStyle}
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Controlled component
          disabled={isSubmitting} // Disable input while submitting
        />
        <button type="submit" style={buttonStyle} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        {submissionError && <p style={{ color: 'red' }}>{submissionError}</p>}
      </form>
    </footer>
  );
}



const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const inputStyle = {
  padding: '0.5rem',
  marginRight: '0.5rem',
  border: 'none',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};