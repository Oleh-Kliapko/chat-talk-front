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
import PropTypes from 'prop-types';
import { getFlter } from '../../redux/Filter/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';

export const Search = ({ handleOnChange, setSearchList, setSearchValue }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (filter !== "") { setSearchList(true); setSearchValue(filter); } }, []);
  const onChange = useCallback((e) => { handleOnChange(e); dispatch(getFlter(e.target.value)) }, [dispatch, handleOnChange]);
  return (
    <MainContainer>
      <SearchContainer>
        <LoupeContainer><LoupeIcon size={24} /></LoupeContainer>
        <StyledInput autoFocus={true} value={filter } onChange={onChange} type="text" placeholder='Search' />
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

Search.propTypes = {
  handleOnChange: PropTypes.func,
  setSearchValue: PropTypes.func,
  filter: PropTypes.string,
  setSearchList: PropTypes.func,
};
