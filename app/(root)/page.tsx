import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/routes";

const page = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="font-space-grotesk font-bold  text-white">
        Welcome to Dev Flow
      </h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </>
  );
};

export default page;
