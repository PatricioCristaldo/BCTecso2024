import './SearchBar.css'
import searchIcon from '../../assets/icons/search.png';

const SearchBar = () => {
  return (
    <div className="input">
        <input type="text" placeholder="Nombre; estado, protectora y sexo"/>
        <button className="search-button">
            <img src={searchIcon} alt="" />
        </button>
    </div>
  )
}

export default SearchBar;