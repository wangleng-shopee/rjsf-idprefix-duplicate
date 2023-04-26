import React from "react";
import { Switch } from "antd";
import { Form } from "@rjsf/antd";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

const SCHEMA: RJSFSchema = {
  title: "My Form",
  description: "This is my form",
  type: "object",
};

export default function App() {
  const [addIdPrefix, setAddIdPrefix] = React.useState(false);

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <Switch onChange={(checked) => setAddIdPrefix(checked)} /> Add idPrefix
        to Form
      </div>
      <Form
        idPrefix={addIdPrefix ? "randomPrefix" : undefined}
        schema={SCHEMA}
        validator={validator}
      />
    </>
  );
}
