import Poster from "Components/Poster";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Section from "Components/Section";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV Shows | BBangflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated TV Shows">
            {topRated.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imgUrl={tv.poster_path}
                rating={tv.vote_average}
                title={tv.original_name}
                year={tv.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular TV Shows">
            {popular.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imgUrl={tv.poster_path}
                rating={tv.vote_average}
                title={tv.original_name}
                year={tv.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today TV Shows">
            {airingToday.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imgUrl={tv.poster_path}
                rating={tv.vote_average}
                title={tv.original_name}
                year={tv.first_air_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
