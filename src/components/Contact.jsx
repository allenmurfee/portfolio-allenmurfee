import { Label, TextInput } from "flowbite-react";

const useContact = () => {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="small" value="Email" />
        </div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="small" value="First Name" />
        </div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="small" value="Last Name" />
        </div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="small" value="Subject" />
        </div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="large" value="Message" />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      </div>
    </div>
  );
};

export default useContact;
