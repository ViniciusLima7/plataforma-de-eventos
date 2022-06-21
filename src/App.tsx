import { gql, useQuery } from "@apollo/client";

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_QUERY);
  console.log(data);

  return (
    <div>
      <h1 className="text-2xl text-center mt-9">Hello Dev</h1>
      <ul className="text-center">
        {data?.lessons.map((lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
