import CreateExercise from "@/components/CreateExercise";
import PageHeader from "@/components/PageHeader";
import ProfileData from "@/components/ProfileData";

import getExercises from "@/firebase/firestore/getExercises";

const ProfilePage = async () => {
  const { error, result } = await getExercises();

  return (
    <div>
      <PageHeader pageName="ProfilePage" />

      <ProfileData />

      <CreateExercise />

      <p>doc data does here</p>

      {result?.map((res) => {
        const data = res.data();

        return <p key={res.id}>route taken: {data.routeName}</p>;
      })}
    </div>
  );
};

export default ProfilePage;
