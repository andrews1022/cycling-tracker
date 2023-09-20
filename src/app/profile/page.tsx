import { CreateExercise } from "@/components/CreateExercise";
import { ExercisesTable } from "@/components/ExercisesTable";
import { PageHeader } from "@/components/PageHeader";

const ProfilePage = () => {
  return (
    <div>
      <PageHeader pageName="ProfilePage" />

      <div className="flex">
        <CreateExercise />

        {/* @ts-expect-error Async Server Component */}
        <ExercisesTable />
      </div>
    </div>
  );
};

export default ProfilePage;
