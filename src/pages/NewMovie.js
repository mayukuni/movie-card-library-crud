// import React, { Component } from 'react';
// import { Redirect } from 'react-router';

// import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

// class NewMovie extends Component {
//   constructor(props) {
//     super(props);
//     this.state({
//       shouldRedirect: false,
//     });
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(newMovie) {
//     movieAPI.createMovie(newMovie);
//     this.setState({
//       shouldRedirect: true,
//     });
//   }

//   render() {
//     const { shouldRedirect } = this.state;
//     return (
//       shouldRedirect ? <Redirect to="/" /> : (
//         <div data-testid="new-movie">
//           <MovieForm onSubmit={ this.handleSubmit } />
//         </div>
//       )
//     );
//   }
// }
// export default NewMovie;
import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
