const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:9111";

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export const sendContactForm = async (
  data: ContactFormData
): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BACKEND_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message");
    }

    return result;
  } catch (error) {
    console.error("Error sending form:", error);
    throw error;
  }
};
