import CreateExercise from "@/components/CreateExercise";
import PageHeader from "@/components/PageHeader";
import ProfileData from "@/components/ProfileData";

const ProfilePage = () => {
  return (
    <div>
      <PageHeader pageName="ProfilePage" />

      <ProfileData />

      <CreateExercise />

      <p>data goes here</p>
    </div>
  );
};

export default ProfilePage;
