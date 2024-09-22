import { FormValidationResponseType } from "~/types/validation";

export interface ValidationErrorsProps {
  validationErrors: FormValidationResponseType;
}

export default function ValidationErrors({
  validationErrors,
}: ValidationErrorsProps) {
  return (
    <ul>
      {Object.values(validationErrors).map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
}
