import type { TinaField } from "tinacms";

export function defineCustomField<Field extends TinaField>(
  baseField: Field,
  newField: Partial<Field> = {}
) {
  return {
    ...baseField,
    ...newField,
  };
}
