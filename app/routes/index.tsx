import { TextSpinner } from "@app/components/text-spinner";
import { getSanityClient } from "@app/lib/sanity";

export default function Index() {
  return (
    <div className="flex flex-col">
      <div className="h-[90vh]">
        <TextSpinner
          text="Design + Development + "
          repeats={5}
          className="fixed left-1/2 -bottom-16 -right-16 opacity-50"
        />
      </div>
    </div>
  );
}
