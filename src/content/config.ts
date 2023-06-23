import type { Collection, TinaField } from "tinacms";
import { schema as tinaSchema } from "@tina/schema";
import { defineCollection, z } from "astro:content";

function mapField(field: TinaField) {
  let base;

  if (field.type === "object") {
    if ("fields" in field && field.fields) {
      const fields = convertFields(field.fields);
      base = z.object(fields);
    }
    if ("templates" in field && field.templates) {
      for (const [index, template] of field.templates.entries()) {
        const fields = convertFields(template.fields);
        if (index === 0) base = z.object(fields);
        else base?.or(z.object(fields));
      }
    }
  } else {
    switch (field.type) {
      case "reference":
      case "image":
      case "string":
        base = z.string();
        break;
      case "number":
        base = z.number();
        break;
      case "boolean":
        base = z.boolean();
        break;
      case "datetime":
        base = z.date();
    }
  }

  if (!base) return;

  if (!field.required) base = z.optional(base);
  if (field.list) base = z.array(base);

  if (field.name === "links" || field.name === "connect") {
    console.log(field.name, " => is list:", field.list);
  }

  return base;
}

type ConvertedFields = {
  [key: string]: ReturnType<typeof mapField>;
};

function convertFields(fields: TinaField[]): ConvertedFields {
  return fields.reduce((collection, field) => {
    return Object.assign({}, collection, {
      [field.name]: mapField(field),
    });
  }, {} satisfies ConvertedFields);
}

type ConvertedCollections = {
  [key: string]: ReturnType<typeof defineCollection>;
};

function convertCollections(collections: Collection[]): ConvertedCollections {
  return collections.reduce((schema, collection) => {
    if (!collection.fields) return schema;
    const fields = convertFields(collection.fields);
    return Object.assign({}, schema, {
      [collection.name]: defineCollection({
        type: "data",
        schema: z.object(fields),
      }),
    });
  }, {});
}

export const collections = convertCollections(tinaSchema.collections);
