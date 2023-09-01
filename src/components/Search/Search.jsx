// import Filter from "../../images/svg/Filter";
import {
  // CloseIcon,
  LoupeIcon,
  // ArrowRightIcon
} from '../../images/reactIcons';
import {
  MainContainer,  SearchContainer,  StyledInput,  LoupeContainer,
  // FilterContainer,  OptionsContainer,  Text, List, Item, ArrowContainer, Button,  CloseContainer,
} from "./Search.styled";
// import { useCallback, useEffect, useState } from "react";
// import { useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import debounce from "lodash/debounce";
import { getAllChannels, getAllChannelsBySearch } from "../../redux/channels/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const Search = ({ page }) => {
  const dispatch = useDispatch();
  // const [searchState, setSearchState] = useState('');
  // const [showOptions, setShowOptions] = useState(false);
  // const [searchResults, setSearchResults] = useState([]);
  const handleOnChange = debounce(event => {
    const search = event.target.value.trim().toLowerCase()
    toast.success(search);
    if (search === "") return dispatch(getAllChannels(page));
    if (search.length > 0) return dispatch(getAllChannelsBySearch({ page, search }));
  }, 1000);
  // useEffect(() => {
  //   const allData = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Grapes', 'Watermelon'];
    
  //   if (searchState.length >= 3) {
  //     const filteredResults = allData.filter(item => item.toLowerCase().includes(searchState.toLowerCase()));
  //     setSearchResults(filteredResults);
  //   } else { setSearchResults([]) }
  // }, [searchState]);
  // const search = useCallback(() => { setSearchState('') }, []);
  // const toggleOptions = useCallback(() => { setShowOptions(prev => !prev) }, []);
  // const handleInputChange = useCallback((event) => { setSearchState(event.target.value) }, []);
  // const searchLatest = useCallback(() => { setShowOptions(false) }, []);
  // const searchByAmount = useCallback(() => { setShowOptions(false) }, []);

  return (
    <MainContainer>
      <SearchContainer>
        <LoupeContainer><LoupeIcon size={24} /></LoupeContainer>
        <StyledInput  onChange={handleOnChange} type="text" placeholder='Search' />
        {/* {searchResults.length > 0 && searchState.length > 0 && (
          <List>
            {searchResults.map((result) => (<Item onClick={search} key={result}>{result}<ArrowContainer ><ArrowRightIcon size={24} /></ArrowContainer></Item>))}
          </List>)}
        {searchState && <CloseContainer onClick={() => setSearchState('')}><CloseIcon size={18} /></CloseContainer>} */}
      </SearchContainer>
      {/* <FilterContainer>
        <Button type="button" onClick={toggleOptions}><Filter size={24} /></Button>
        {showOptions && <OptionsContainer>
          <Text onClick={searchLatest}>Latest</Text>
          <Text onClick={searchByAmount}>Amount</Text>
        </OptionsContainer>}
      </FilterContainer> */}
    </MainContainer>
  );
};

Search.propTypes = { page: PropTypes.number };
