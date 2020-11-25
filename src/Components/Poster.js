import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.imgUrl});
  height: 180px;
  border-radius: 4px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  transition: opacity 0.1s linear;
  opacity: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  :hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  margin-bottom: 3px;
  display: block;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imgUrl, rating, title, year, isMovie }) => (
  <Link to={isMovie ? `/movie/${id}` : `tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          imgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w300${imgUrl}`
              : "https://raw.githubusercontent.com/nomadcoders/nomflix/2b3839f5d0adc1f6e9ea7d126285ac81c53cea82/src/assets/noPosterSmall.png"
          }
        />
        <Rating>
          <span>⭐️</span>
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default Poster;
