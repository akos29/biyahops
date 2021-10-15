// import axios from "axios";

// state = {
//   books: {},
//   isLoaded: false,
// };
// componentDidMount();
// {
//   axios
//     .get("http://localhost:8000/wp-json/wp/v2/books")
//     .then((res) =>
//       this.setState({
//         books: res.data,
//         isLoaded: true,
//       })
//     )
//     .catch((err) => console.log(err));
//   console.log(books);
// }
// export default function handler(req, res) {
//   const { books, isLoaded } = this.state;
//   console.log(books);
//   if (isLoaded) {
//     console.log("sofar so good");
//     res.status(200).json(books);
//   }
// }
