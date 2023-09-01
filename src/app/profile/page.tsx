import CreateExercise from "@/components/CreateExercise";
import Exercises from "@/components/Exercises";
import PageHeader from "@/components/PageHeader";

const ProfilePage = () => {
  return (
    <div>
      <PageHeader pageName="ProfilePage" />

      <div className="flex mt-4">
        <CreateExercise />

        {/* @ts-expect-error Async Server Component */}
        <Exercises />
      </div>
    </div>
  );
};

export default ProfilePage;
