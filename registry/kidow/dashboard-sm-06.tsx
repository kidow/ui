import {
  Widget,
  WidgetContent,
  WidgetFooter,
} from "@/components/kidow/widget";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function WidgetDemo() {
  return (
    <Widget className="gap-3" design="mumbai">
      <WidgetContent className="w-full flex-col items-start justify-start gap-2">
        <Textarea
          className="h-full max-h-28"
          placeholder="Type your message here."
        />
      </WidgetContent>
      <WidgetFooter>
        <Button className="w-full" size="sm">
          Send Feedback
        </Button>
      </WidgetFooter>
    </Widget>
  );
}
