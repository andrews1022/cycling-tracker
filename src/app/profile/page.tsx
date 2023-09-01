import CreateExercise from "@/components/CreateExercise";
import PageHeader from "@/components/PageHeader";

const ProfilePage = () => {
  return (
    <div>
      <PageHeader pageName="ProfilePage" />

      <CreateExercise />

      <p>data goes here</p>
    </div>
  );
};

export default ProfilePage;

/*
  FORM (Exercise)

  - fields for:
    - route name --> string
    - distance travelled --> number
    - duration (minutes) --> number
    - average speed (kmph) --> number
    - top speed (kmph) --> number
    - calories burned --> number
    - date (today's day, month, year) --> date
*/
