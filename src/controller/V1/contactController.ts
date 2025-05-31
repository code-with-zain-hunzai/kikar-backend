import { contactFormSchema } from "../../schema/contactSchema";
import Contact from "../../model/contactModel";
import { z } from "zod";

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const submitContactForm = async (req: any, res: any): Promise<void> => {
  try {
    const formData = req.body;

    // Validate input
    const parsedData = contactFormSchema.parse(formData);

    // Save to DB
    const contact = await Contact.create(parsedData);

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully!",
      data: contact,
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }

    console.error("Error submitting form:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};