const Book=({title,cover, author})=>{
    return(
        <section className="book">
            <img src={cover} alt={title} className="book-cover" />
        <h2>{title}</h2>
        <p>By {author}</p>
      </section>
    );
};

export default Book;