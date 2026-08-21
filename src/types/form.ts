import { z } from "zod";

export const formFieldTypeSchema = z.enum([
  "TEXT",
  "TEXTAREA",
  "EMAIL",
  "NUMBER",
  "SELECT",
  "CHECKBOX",
  "DATE",
]);

export type FormFieldType = z.infer<typeof formFieldTypeSchema>;

export const formFieldDefinitionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  type: formFieldTypeSchema,
  required: z.boolean().default(false),
  placeholder: z.string().optional(),
  options: z.array(z.string()).optional(), // SELECT için
  order: z.number().int().nonnegative().default(0),
});

export type FormFieldDefinition = z.infer<typeof formFieldDefinitionSchema>;

export const formFieldsSchema = z.array(formFieldDefinitionSchema);

/** FormSubmission.data — fieldId -> değer */
export const formSubmissionDataSchema = z.record(
  z.string(),
  z.union([z.string(), z.number(), z.boolean(), z.array(z.string()), z.null()]),
);

export type FormSubmissionData = z.infer<typeof formSubmissionDataSchema>;
