// API endpoint for sending emails
const API_URL = '/.netlify/functions';

// Function to send join session email
export const sendJoinSessionEmail = async (formData: {
  name: string;
  email: string;
  sessionTitle: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/join-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    return { success: data.success, messageId: data.message };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

// Function to send custom session request email
export const sendCustomSessionRequestEmail = async (formData: {
  name: string;
  email: string;
  format: string;
  topic: string;
  message: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/custom-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    return { success: data.success, messageId: data.message };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

// Function to send newsletter subscription email
export const sendSubscriptionEmail = async (email: string) => {
  try {
    const response = await fetch(`${API_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    
    const data = await response.json();
    return { success: data.success, messageId: data.message };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};
