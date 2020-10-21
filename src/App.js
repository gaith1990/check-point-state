import React from 'react';
import './App.css';
import pic from './img.jpeg'
 
class App extends React.Component { state ={
  show: true ,
  name: "Melhem Barakat" ,
  image: pic ,
  bio: " Bio: Melhem Barakat, est un chanteur libanais, né en 1942 à Kfarchima, au Liban et a été élevé au sein d'une famille Chrétienne orthodoxe Dès son plus jeune age, il appréciait la musique du compositeur et chanteur égyptien Mohammed Abdel Wahab. Beaucoup de gens autour de lui ont remarqué qu'il avait un grand talent quand il chantait lors des fêtes scolaires. Un jour, il a composé un texte pour le journal scolaire et l'a chanté devant ses camarades et ses enseignants qui ont apprécié sa performance.",
  profession:" Profession: Melhem Barakat a chanté principalement dans le dialecte libanais et a critiqué les chanteurs libanais qui chantaient dans le dialecte égyptien à des fins commerciales. Il est devenu une célébrité dans la plupart des pays arabes, notamment en Syrie, en Jordanie, au Liban, en Tunisie, au Maroc, et une célébrité plus modeste en Égypte.Barakat a commencé à chanter il y a plus de trente ans. Il a participé comme acteur et chanteur dans plusieurs comédies musicales et opérettes des Frères Rahbani ; et s'est établi comme l'une des voix les plus fortes du pays1.Il est apparu dans de nombreux films libanais dans les années 1980. Parmi ses succès se trouvent Kboush El Touti et Wahdi Ana (« Je suis seul »).Durant les années 1990, Melhem Barakat a joué avec la danseuse libanaise Dani Boustros dans une pièce de théâtre libanaise intitulée Wemsheet Bee Tariki (« J'ai passé mon chemin »). Dans les années 2000, il a eu plusieurs chansons à succès, tels que Habibi Enta (« Tu es mon amour ») qui a ensuite été chanté par son ex-femme May Hariri2. Il a également collaboré avec des chanteurs célèbres comme Najwa Karam, Karol Sakr, Shatha Hassoun et Majida El Roumi3.Il meurt le 28 octobre 2016 à Achrafieh après un long combat contre le cancer." ,
counter:0 
};
 incrementCounter() {
  const counter = this.state.counter;
  this.setState({   counter: counter + 1 });
}
componentDidMount() {
  const thisBoundedIncrementer = this.incrementCounter.bind(this);
  setInterval(thisBoundedIncrementer, 1000)
}
  render (){ return (
    <div>
      <div className='bar'>
      <button className='Button' onClick={() => { this.setState({ show: !this.state.show });this.setState( {counter:0}); }}>
        {this.state.show ? 'Hide' : 'Show'}</button>
        <h2>{this.state.counter}</h2> 
        </div>
      { this.state.show ?
      <div className='profile'>
        <h1>{this.state.name}</h1>
      <img src={this.state.image} alt=''/>
    <h4>{this.state.bio}</h4>
    <h4>{this.state.profession}</h4>
       </div> :null }
      
    </div>
  )
  };
}


export default App;
