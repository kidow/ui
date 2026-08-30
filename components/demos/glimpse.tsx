'use client'

import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from "@/components/kidow/glimpse";
import { glimpse } from "@/components/kidow/glimpse/server";

const Example = async () => {
  const data = await glimpse("https://github.com/haydenbleasel/ultracite");

  return (
    <div>
      Check out{" "}
      <Glimpse closeDelay={0} openDelay={0}>
        <GlimpseTrigger asChild>
          <a
            className="font-medium text-primary underline"
            href="https://github.com/haydenbleasel/ultracite"
          >
            Kibo UI
          </a>
        </GlimpseTrigger>
        <GlimpseContent className="w-80">
          <GlimpseImage src={data.image ?? ""} />
          <GlimpseTitle>{data.title}</GlimpseTitle>
          <GlimpseDescription>{data.description}</GlimpseDescription>
        </GlimpseContent>
      </Glimpse>{" "}
      on GitHub
    </div>
  );
};

export default Example;
