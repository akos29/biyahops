// import axios from "axios";
// import { server } from "../../../config2";

// state = {
//   books: {},
//   isLoaded: false,
// };

// export default function handler({ query: { id } }, res) {
//   componentDidMount();
//   {
//     axios
//       .get(`${server}/wp-json/wp/v2/books/${id}`)
//       .then((res) =>
//         this.setState({
//           books: res.data,
//           isLoaded: true,
//         })
//       )
//       .catch((err) => console.log(err));
//   }
//   const { books, isLoaded } = this.state;
//   if (isLoaded) {
//     // const filtered = books.filter((book) => book.id === id);

//     if (books.length > 0) {
//       res.status(200).json(books);
//     } else {
//       res.status(404).json({ message: `The article id ${id} is not found!` });
//     }
//   }
// }
