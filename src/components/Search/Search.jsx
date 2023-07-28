import Filter from "../../images/svg/Filter";
import { CloseIcon, LoupeIcon,ArrowRightIcon } from '../../images/reactIcons';
import { MainContainer, SearchContainer, StyledInput, CloseContainer, LoupeContainer, FilterContainer, OptionsContainer, Text, List, Item, ArrowContainer,Button } from "./Search.styled";
import { useCallback, useEffect, useState } from "react";

export const Search = () => {
  const [searchState, setSearchState] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const allData = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Grapes', 'Watermelon'];
    if (searchState.length >= 3) {
      const filteredResults = allData.filter(item =>
        item.toLowerCase().includes(searchState.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else { setSearchResults([]) }
  }, [searchState]);
  const search = useCallback(() => {
    setSearchState('')
  }, []);
  const toggleOptions = useCallback(() => {
    setShowOptions(prev=>!prev)
  },[])
  const handleInputChange = useCallback((event) => {
    setSearchState(event.target.value);
  }, []);
    const searchLatest = useCallback(() => {
   setShowOptions(false)
    }, []);
    const searchByAmount = useCallback(() => {
   setShowOptions(false)
  }, []);

  return (
    <MainContainer>
      <SearchContainer>
        <LoupeContainer><LoupeIcon size={24} /></LoupeContainer>
        <StyledInput value={searchState} onChange={handleInputChange} type="text" placeholder='Search' />
        {searchResults.length > 0 && searchState.length > 0 && (<List>{searchResults.map((result) => (<Item onClick={search} key={result}>{result}<ArrowContainer ><ArrowRightIcon size={24} /></ArrowContainer></Item>))}</List>)}
        {searchState && <CloseContainer onClick={() => setSearchState('')}><CloseIcon size={18} /></CloseContainer>}
      </SearchContainer>
      <FilterContainer>
        <Button type="button" onClick={toggleOptions}><Filter size={24} /></Button>
        {showOptions && <OptionsContainer>
          <Text onClick={searchLatest}>Latest</Text>
          <Text onClick={searchByAmount}>Amount</Text>
        </OptionsContainer>}
      </FilterContainer>
    </MainContainer>
  );
};

  