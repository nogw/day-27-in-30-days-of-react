import React, { useEffect, useState } from 'react';
import { Container, Header, MoviesContainer, Icon, Search, Item, Image, Title, Note, Description, Texts } from './styles';
import axios from 'axios';

function Movies() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('avengers')

  useEffect(() => {
    const movieFetch = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=e7ab195c3abc325f0d45642703eb1cdc&query=${search}`
      try {
        const response = await axios.get(url)
        const data = await response.data
        setMovies(data.results)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    } 

    movieFetch()
  }, [search])

  return (
    <Container>
      <Header>
        <h1>Movies</h1>
        <Search>
          <input type="text" placeholder="Search movie" onChange={e => setSearch(e.target.value)}/>
        </Search>
      </Header>        
      <MoviesContainer>
        {
          (movies.map((movie) => {
            return (
              <Item key={movie.id}>
                <Image>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                </Image>
                <Texts>
                  <Title>
                    <h1>
                      {movie.original_title}
                    </h1>
                    <Note>
                      <Icon />
                      <h1>{movie.vote_average}</h1>
                    </Note>
                  </Title>
                  <Description>
                    <p>{movie.overview}</p>
                  </Description>
                </Texts>
              </Item>
            )
          }))
        }
      </MoviesContainer>        
    </Container>
  );
}

export default Movies;