import CreateExercise from "@/components/CreateExercise";
import Exercises from "@/components/Exercises";
import PageHeader from "@/components/PageHeader";
import ProfileData from "@/components/ProfileData";

const ProfilePage = async () => {
  return (
    <div>
      <PageHeader pageName="ProfilePage" />

      <ProfileData />

      <div className="flex mt-4">
        <CreateExercise />

        {/* @ts-expect-error Async Server Component */}
        <Exercises />
      </div>
    </div>
  );
};

export default ProfilePage;
