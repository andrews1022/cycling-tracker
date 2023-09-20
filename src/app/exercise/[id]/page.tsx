import { EditExercise } from "@/components/EditExercise";
import { PageHeader } from "@/components/PageHeader";
import { getExercise } from "@/firebase/firestore/getExercise";

type SingleExercisePageProps = {
  params: {
    id: string;
  };
};

const SingleExercisePage = async ({ params }: SingleExercisePageProps) => {
  const { error, result } = await getExercise("exercises", params.id);

  const docData = result?.data();

  return (
    <div>
      <PageHeader pageName="SingleExercisePage" />

      <EditExercise data={docData} id={params.id} />
    </div>
  );
};

export default SingleExercisePage;
