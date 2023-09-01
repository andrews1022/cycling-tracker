import CreateExercise from "@/components/CreateExercise";
import PageHeader from "@/components/PageHeader";
import ProfileData from "@/components/ProfileData";
import getExercise from "@/firebase/firestore/getExercise";

const ProfilePage = async () => {
  const { error, result } = await getExercise("exercises", "bPxkFkNjQb9VhG2la4QX");

  const docData = result?.data();

  return (
    <div>
      <PageHeader pageName="ProfilePage" />

      <ProfileData />

      <CreateExercise />

      <p>doc data does here</p>

      <div>
        <p>route name: {docData?.routeName}</p>
        <p>average speed: {docData?.averageSpeed} km/h</p>
        <p>calories burned: {docData?.caloriesBurned}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
