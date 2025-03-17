const firstBook = {
    img: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY218_.jpg',
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
  }
  const secondBook = {
    img: 'https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg',
    title: 'The Power of Your Subconscious Mind',
    author: 'Joseph Murphy ',
  }
  
  
  function BookList() {
    return (
      <section className='booklist'>
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        />
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
      </section>
    )
  }
  const Book = ({ img, title, author }) => {  									
    
    return (
      <article className='book'>
        <img src={img} alt='' />
        <h3>{author}</h3>
        <h1>{title}</h1>
      </article>
    )
}

const names = ['naruto', 'lufffy', 'hinata']
const newName = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
})
console.log(newName)
function BookListt() {
  return <section className='booklist'>{newName}</section>
}

const books = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY218_.jpg',
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg',
      title: 'The Power of Your Subconscious Mind',
      author: 'Joseph Murphy ',
    },
    {
      id: 3,
      img: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg',
      title: 'Ikigai',
      author: 'Héctor García',
    },
  ]
  
  
  function BookListtt() {
    return (
      <section className='booklist'>
        {/* {books.map((book,index) => { */}
        {books.map((book) => {
          // return <Book key={index} book={book}></Book>
          // return <Book key={book.id} book={book}></Book>
        })}
      </section>
    )
  }
  
  
  const BookK = (props) => {
    const { img, title, author } = props.book
    return (
      <article className='book'>
        <img src={img} alt='' />
        <h3>{author}</h3>
        <h1>{title}</h1>
      </article>
    )
  
  }
  