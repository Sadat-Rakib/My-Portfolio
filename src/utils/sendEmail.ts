import { receiver_email } from "../../public/data/contact";

export const sendEmail = async (values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = values;

  return await fetch("https://email-sender-six-phi.vercel.app/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
      receiver_email,
    }),
  });
};
