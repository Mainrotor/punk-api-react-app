import {Component} from 'react';
import BeerCard from './BeerCard';

class List extends Component {
    constructor(props) {
    super(props)

    this.state = {
        beers : [],
    }

}

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers')
        .then((res) => res.json())
        .then((data) => {
            const beers = data;
            this.setState({beers : [...beers]});
        })


    }

    runMe() {
        console.log(this.state.beers)
    }

    clickLike(e) {
        console.log(this.state)
        
    }

    

    render() {
        return (
        <ul>
            {this.state.beers.map((beer, index) => {
                return(
                    <BeerCard key={index} index={index} name={beer.name} desc={beer.description} img={beer.image_url} clickLike={this.clickLike}/>
                )
                
            })}
        </ul>
        )
    }

}

export default List;