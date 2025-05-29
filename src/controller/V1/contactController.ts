import { Request, Response } from "express";
import Contact from "../../model/contactModel";

export const submitContactForm = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const formData = req.body;
    const contact = await Contact.create(formData);

    res.status(201).json({
      success: true,
      message: "Form submitted successfully!",
      data: contact,
    });
  } catch (error: any) {
    console.error("Error submitting form:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

