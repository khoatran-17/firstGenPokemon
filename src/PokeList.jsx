import PokeEntry from './PokeEntry.jsx';

const PokeList = ({ pokeList }) => {
  return (
    <div>
      {pokeList.map((pokemon, index) => {
        const { name, url } = pokemon;
        return <PokeEntry key={index} name={name} url={url} />;
      })}
    </div>
  );
};
export default PokeList;
