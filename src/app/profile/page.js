import { auth } from "../../../auth";
import { redirect } from "next/navigation";

async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  const email = session.user.email;
  return <div>{email} خوش آمدید</div>;
}

export default ProfilePage;
