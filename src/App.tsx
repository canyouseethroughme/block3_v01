import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  {
    artists {
      name
      coverPhoto {
        url
      }
      genre {
        genre
      }
    }
  }
`;
const App = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading)
    return (
      <code>
        <b>Loading ...</b>
      </code>
    );

  if (error)
    return (
      <code>
        <b>Error :/</b>
      </code>
    );

  return (
    <div className="App">
      <code>
        <b> Artists:</b> <br />
      </code>
      {data &&
        data.artists.map((artist: any, i: number) => (
          <code key={i}>
            {artist.name}
            <br />
          </code>
        ))}
    </div>
  );
};

export default App;
