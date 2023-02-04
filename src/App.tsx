import { useQuery, gql } from "@apollo/client";
import React from "react";

const QUERY = gql`
  {
    pastEvents(first: 1) {
      name
    }
    futureEvents(first: 1) {
      name
      date
    }
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
        <b>Past Event:</b>{" "}
      </code>
      <code>{data.pastEvents[0].name}</code>
      <br />
      <br />

      <code>
        <b>Future Event:</b>{" "}
      </code>
      <code>
        {data.futureEvents[0].name} / {data.futureEvents[0].date}
      </code>
      <br />
      <br />

      <code>
        <b>Artists:</b>
      </code>
      <br />
      {data.artists.map((artist: any, i: number) => (
        <React.Fragment key={i}>
          <code>{artist.name}</code>
          <br />
          <img
            src={artist.coverPhoto.url}
            loading="lazy"
            alt={artist.name}
            style={{
              width: "100%",
              maxWidth: "4rem",
              height: "4rem",
              objectFit: "cover",
            }}
          />
          <br />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
