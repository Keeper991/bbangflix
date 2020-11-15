import React from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends React.Component {
  state = {
    toRated: null,
    popular: null,
    airingToday: null,
    tvDetail: null,
    loading: true,
    error: null,
  };

  render() {
    const {
      toRated,
      popular,
      airingToday,
      tvDetail,
      loading,
      error,
    } = this.state;
    return (
      <TVPresenter
        toRated={toRated}
        popular={popular}
        airingToday={airingToday}
        tvDetail={tvDetail}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TVContainer;
