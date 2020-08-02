const { default: MovieShowcase } = require("./src/MovieShowcase");

class App extends React.Component {
    render() {
      return (
        <div>
          {
              <MovieShowcase/>
          }
        </div>
      )
    }
  }