import React from "react";
import { Switch } from "antd";
import { Form } from "@rjsf/antd";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

const SCHEMA: RJSFSchema = {
  title: "My Form",
  description: "This is my form",
  type: "object",
  properties: {
    multipleChoicesList: {
      type: "array",
      title: "A multiple choices list",
      items: {
        type: "string",
        enum: ["foo", "bar", "fuzz", "qux"],
      },
      uniqueItems: true,
    },
  },
};

const UI_SCHEMA: UiSchema = {
  multipleChoicesList: {
    "ui:widget": "checkboxes",
  },
};

export default function App() {
  const [addIdPrefix, setAddIdPrefix] = React.useState(true);

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <Switch
          checked={addIdPrefix}
          onChange={(checked) => setAddIdPrefix(checked)}
        />{" "}
        Add idPrefix to Form
      </div>
      <Form
        idPrefix={addIdPrefix ? "randomPrefix" : undefined}
        schema={SCHEMA}
        uiSchema={UI_SCHEMA}
        validator={validator}
      />
    </>
  );
}
