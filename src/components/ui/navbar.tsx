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
import useRequest from "@/hooks/useRequest";
import { useToast } from "@/hooks/use-toast";

interface ApiResponse {
  message: string;
  success: boolean;
}

const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", exp: "" });
  const { toast } = useToast();
  const { loading, makeRequest } = useRequest<ApiResponse>(
    "/waitlist/academics"
  );
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === "number") {
      setForm({ ...form, [name]: Number(value) });
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await makeRequest(form);
    // @ts-ignore
    if (res.status === "success") {
      toast({
        variant: "success",
        title: "Your details have been submitted successfully",
      });
      setOpenDialog(false);
    } else {
      toast({
        variant: "destructive",
        title: "Failed to submit details",
        description: res?.message,
      });
    }
  };
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
                commodi, ad earum veniamo!
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
          <form onSubmit={handleSubmit}>
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
                  name="name"
                  required
                  onChange={handleInput}
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
                  id="email"
                  name="email"
                  required
                  onChange={handleInput}
                  type="email"
                  placeholder="Email address"
                  className="col-span-4 lg:col-span-3 border rounded p-3 text-sm"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4 gap-y-2">
                <label
                  htmlFor="name"
                  className="col-span-3 lg:col-span-1 lg:text-right"
                >
                  How long have you been a realtor (in years)?
                </label>
                <input
                  id="exp"
                  name="exp"
                  required
                  onChange={handleInput}
                  type="number"
                  placeholder="e.g. 1"
                  className="col-span-4 lg:col-span-3 border rounded p-3 text-sm"
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                disabled={loading}
                type="submit"
                className="relative bg-brand-secondary"
              >
                Submit
                {loading && (
                  <div className="absolute  top-0 left-0 w-full h-full bg-inherit flex items-center justify-center">
                    <div className="rounded-full size-8 border border-white border-b-0 animate-spin "></div>
                  </div>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
