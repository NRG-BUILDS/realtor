import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./button";

const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleShowModal = () => {
    setOpenDialog(true);
    return;
  };
  return (
    <nav className="z-50 sticky top-0 left-0 w-full bg-white bg-opacity-5 border-b border-white border-opacity-20 backdrop-blur py-4">
      <div className="container text-white mx-auto px-2 flex items-center justify-between">
        <h1 className="text-xl font-bold ">Tenxseeds</h1>

        <div className="flex items-center gap-10 justify-end">
          <button
            onClick={handleShowModal}
            className="p-2 px-3 rounded-full bg-white text-primary"
          >
            Academics
          </button>
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="w-full lg:max-w-[725px] mx-1">
          <DialogHeader>
            <DialogTitle>Academics</DialogTitle>
            <DialogDescription>
              <p>
                The TenX event is scheduled to hold between Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Facilis inventore
                commodi, ad earum veniam!
              </p>
              <br />
              <p>
                Connecting realtors, enthusiasts, and Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Voluptates consequuntur.
              </p>
              <br />
              Time: 10am - 4pm Oct, 16 2025.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4 gap-y-2">
              <label
                htmlFor="name"
                className="col-span-3 lg:col-span-1 lg:text-right"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Your full name"
                className="col-span-4 lg:col-span-3 border rounded p-3 text-sm"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 gap-y-2">
              <label
                htmlFor="name"
                className="col-span-3 lg:col-span-1 lg:text-right"
              >
                Email
              </label>
              <input
                id="name"
                placeholder="Email address"
                className="col-span-4 lg:col-span-3 border rounded p-3 text-sm"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 gap-y-2">
              <label
                htmlFor="name"
                className="col-span-3 lg:col-span-1 lg:text-right"
              >
                How long have you been a realtor?
              </label>
              <input
                id="name"
                placeholder="e.g. 1 year"
                className="col-span-4 lg:col-span-3 border rounded p-3 text-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="bg-brand-secondary">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
