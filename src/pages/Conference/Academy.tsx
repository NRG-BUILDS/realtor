import background from "../../assets/images/backgrounds/Marina-at-Dusk.jpg";
import person1 from "../../assets/images/avatars/tenxseeds_academy.png";
import person1Low from "../../assets/images/avatars/tenxseeds_academy_low.png";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { Button } from "";
import useRequest from "@/hooks/useRequest";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface ApiResponse {
  message: string;
  success: boolean;
}

const Academy = () => {
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
    <main className="lg:overflow-x-clip lg:flex items-start min-h-svh lg:min-h-0 lg:h-auto absolute top-0 left-0 w-full max-w-[100svw] bg-black">
      {/* background image */}
      <img
        src={background}
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover"
      />
      {/* linear gradient background */}
      <div className="bg-gradient-to-tl from-brand-secondary via-brand-primary to-brand-tertiary opacity-[0.72] fixed top-0 left-0 w-full h-full" />
      <div className="container p-0 lg:pt-32 mx-auto w-full flex flex-row items-center fixed lg:relative top-0 left-0 h-[100svh] lg:items-stretch gap-20 justify-between text-white z-10">
        {/* details */}
        <div className="p-4 flex flex-col self-center w-full lg:min-w-[500px] max-w-[600px] gap-3">
          <div className="w-full max-w-[544px]">
            <h1 className="text-6xl leading-[72px] tracking-tighter">
              The <b className="italic">TenX Academy</b>
            </h1>
            <p className="pt-4 pb-16 max-w-[416px]">
              Transform your Real Estate career. <b>Join the TenX Academy</b>{" "}
              and discover the secrets to exponential success in the global real
              estate industry
            </p>
          </div>
          <div className="bg-white text-gray-500 rounded-2xl flex flex-col md:flex-row items-stretch justify-between w-full gap-8">
            <div className="relative w-full min-h-16">
              <button
                onClick={() => {
                  handleShowModal();
                }}
                className="absolute overflow-clip top-0 left-0 font-semibold  transition-all bg-brand-secondary rounded-md lg:rounded-2xl lg:rounded-l-none h-full w-full shadow-md hover:shadow-lg flex items-center justify-center text-white disabled:opacity-50"
              >
                Register
              </button>
            </div>
          </div>
          <div className="fixed md:hidden bottom-1 right-0 -z-10 h-[70vh] w-[100vw]">
            <img
              src={person1}
              alt=""
              className="size-full w-auto object-cover filter saturate-50 brightness-50"
            />
          </div>
        </div>

        {/* image card */}
        <div className="w-full h-[500px] md:block hidden lg:h-auto lg:w-[60vw]">
          <ProgressiveImage
            lowResSrc={person1Low}
            highResSrc={person1}
            alt="Sample Image"
            className="size-full"
          />
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="w-full lg:max-w-[725px] mx-1">
          <DialogHeader>
            <DialogTitle>TenX Academy</DialogTitle>
            <DialogDescription>
              <p>
                Transform your Real Estate career. <b>Join the TenX Academy</b>{" "}
                and discover the secrets to exponential success in the global
                real estate indusry
              </p>
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
    </main>
  );
};

export default Academy;

interface ProgressiveImageProps {
  lowResSrc: string; // URL of the low-resolution image
  highResSrc: string; // URL of the high-resolution image
  alt: string; // Alt text for the image
  className?: string; // Optional CSS class for the wrapper
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  lowResSrc,
  highResSrc,
  alt,
  className = "",
}) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Low-res placeholder */}
      <img
        src={lowResSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          isHighResLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(10px)" }}
      />

      {/* High-res image */}
      <img
        src={highResSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isHighResLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsHighResLoaded(true)}
      />
    </div>
  );
};
