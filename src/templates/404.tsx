import * as React from "react";
import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
} from "@yext/pages";
import "../shadcn.css";

export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Page Not Found",
  };
};

const FourOhFour: Template<TemplateRenderProps> = () => {
  return (
    <div className={"flex h-screen"}>
      <div className={"m-auto"}>
        <h1 className={"font-bold text-4xl"}>Oopsie 404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default FourOhFour;
