import { movieApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      loading: true,
      error: null,
    };
    const {
      location: { pathname },
    } = props;
    this.isMovie = pathname.includes("/movie/");
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    if (isNaN(Number(id))) {
      return push("/");
    }
    const { isMovie } = this;
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.detail(id));
      } else {
        ({ data: result } = await tvApi.detail(id));
      }
    } catch {
      this.setState({ error: "Can not find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}

export default DetailContainer;
