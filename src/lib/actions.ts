"use server";

export const handleContactForm = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const email = formData.get("email");
  const name = formData.get("name");

  console.log(`${name}`);
  console.log(`${email}`);
};
