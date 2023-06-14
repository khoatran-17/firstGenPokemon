const Searchbox = ({searchChange}) => {
  return <div>
    <input type="search" placeholder="Search 1st Gen Pokemon" onChange={searchChange}/>
  </div>;
};

export default Searchbox;
