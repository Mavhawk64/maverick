//-----------------------ReactJS Code For Getting Repositories-----------------------//
//   'use strict';
//
// const e = React.createElement;
//
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//
//   render() {
//     if (this.state.liked) {
//       return (<div>
      // <i class="bi bi-laptop"></i>
      // <span data-purecounter-start="0" data-purecounter-end="8" data-purecounter-duration="1" class="purecounter"></span>
      // <p><strong>Repositories</strong> uploaded to GitHub</p>
//       </div>);
//       //return 'You like this';
//     }
//
//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
//
// const domContainer = document.querySelector('#repositories_counter');
// ReactDOM.render(e(LikeButton), domContainer);

// const { useState } = React

// const Card = props => {
//   return (
//     <div style={{ margin: '1em' }}>
//       <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
//       <div>
//         <div style={{ fontWeight: 'bold' }}>{props.name}</div>
//         <div>{props.blog}</div>
//       </div>
//     </div>
//   )
// }

// const CardList = props => <div>{props.cards.map(card => <Card {...card} />)}</div>

// const Form = props => {
//   const [username, setUsername] = useState('')

//   handleSubmit = event => {
//     event.preventDefault()

//     axios
//       .get(`https://api.github.com/users/${username}`)
//       .then(resp => {
//         props.onSubmit(resp.data)
//         setUsername('')
//       })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={event => setUsername(event.target.value)}
//         placeholder="GitHub username"
//         required
//       />
//       <button type="submit">Add card</button>
//     </form>
//   )
// }

// const App = () => {
//   const [cards, setCards] = useState([])

//   addNewCard = cardInfo => {
//     setCards(cards.concat(cardInfo))
//   }

//   return (
//     <div>
//       <Form onSubmit={addNewCard} />
//       <CardList cards={cards} />
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('repositories_counter'))
